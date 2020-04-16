export function renderDungeonLinks(dungeon) {
    const link = document.createElement('a');
    link.classList.add('dungeon');

    link.href = '../dungeon/?id=' + dungeon.id;

    // set the location of where it should appear
    // link.style.top = dungeon.map.top;
    // link.style.left = dungeon.map.left;
    // set the name of the link
    link.textContent = dungeon.title;

    // don't forget the return, the cause of much pain
    return link;
}

export function renderCompletedDungeon(dungeon) {
    const span = document.createElement('span');
    span.classList.add('dungeon');
    span.classList.add('completed');

    span.style.top = dungeon.map.top;
    span.style.left = dungeon.map.left;

    span.textContent = dungeon.title;
    return span;
}