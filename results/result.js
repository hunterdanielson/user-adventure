import { scoreGold, scoreHp, hpMessages, aliveGoldMessages, deadGoldMessages } from './resultMessages.js';
import { getUser } from '../data/user-api.js';
import { loadProfile } from '../common/functions.js';

loadProfile();
const user = getUser();

const storyDisplay = document.getElementById('story-display');
const startOverButton = document.getElementById('start-over-button');

const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.gold);

const hpMessage = hpMessages[hpResult];

let goldMessage = null;
if (hpResult === 'dead') {
    goldMessage = deadGoldMessages[goldResult];
} else {
    goldMessage = aliveGoldMessages[goldResult];
}

let story = 'Your adventure, ';
story += user.name + ' played as ' + user.character + ', ';
story += hpMessage + ' and ' + goldMessage + '.';

storyDisplay.textContent = story;

startOverButton.addEventListener('click', () => {
    window.location = '../';
});