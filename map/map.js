import { getUser } from '../data/user-api.js';
import { dungeons } from '../data/dungeons.js';
import { loadProfile, isDead, completedAllDungeons } from '../common/functions.js';
import { renderDungeonLinks, renderCompletedDungeon } from './renders.js';

loadProfile();

// grab the user from storage
const user = getUser();
// check if the game is over
if (isDead(user) || completedAllDungeons(dungeons, user)) {
    window.location = '../results';
}

const dungeonsDiv = document.getElementById('dungeons');

dungeons.forEach(dungeon => {
    let dungeonDisplay = null;
    if (user.completed[dungeon.id]) {
        // if completed just show text
        dungeonDisplay = renderCompletedDungeon(dungeon);
    } else {
        // if not complete make the link for each dungeon
        dungeonDisplay = renderDungeonLinks(dungeon);
    }
    // push each onto the map
    dungeonsDiv.appendChild(dungeonDisplay);

});