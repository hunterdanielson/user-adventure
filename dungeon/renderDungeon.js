export function createChoice(choice) {
    const label = document.createElement('label');
    label.classList.add('choice');
    
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    radio.value = choice.id;
    label.appendChild(radio);

    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);

    return label;

}

export function calcChoice(choice, dungeonId, user) {
    // add the values from the dungeon to the users values
    user.hp += choice.hp;
    user.gold += choice.gold;

    // set the dungeon to completed
    user.completed[dungeonId] = true;
}