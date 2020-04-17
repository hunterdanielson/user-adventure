import { createChoice, calcChoice } from './renderDungeon.js';
import { loadProfile, findById } from '../common/functions.js';
import { getUser, saveUser } from '../data/user-api.js';
import { dungeons } from '../data/dungeons.js';

loadProfile();

// grab the parameters from the url 
const searchParams = new URLSearchParams(window.location.search);

// it should magically know how to get the id from the search bar
const dungeonId = searchParams.get('id');

const dungeon = findById(dungeons, dungeonId);

// if no dungeon is found go back to the map
if (!dungeon) {
    window.location = '../map';
}

// get dom stuff
const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = dungeon.title;
image.src = '../assets/dungeons/' + dungeon.image;
audio.src = '../assets/dungeons/openingChest.mp3'; 
description.textContent = dungeon.description;

const dungeonChoices = dungeon.choices;
dungeonChoices.forEach(choice => {
    // make the choices radio buttons
    const choiceDom = createChoice(choice);

    // append it to the choices element we got earlier
    choices.appendChild(choiceDom);
});

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(dungeon.choices, choiceId);

    const user = getUser();

    // do the math on the user
    calcChoice(choice, dungeon.id, user);

    // save it to local storage
    saveUser(user);
    // hide the choices
    choiceForm.classList.add('hidden');
    description.classList.add('hidden');
    // show the result of their choice
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadProfile();
});