import { getUser } from '../data/user-api.js';

// to load the stuff in the header
export function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    // get the user data
    const user = getUser();
    
    name.textContent = user.name;
    avatar.src = '../assets/user/' + user.character + '.png';
    
    gold.textContent = user.gold;

    // check if user is dead, if are show they died, if not show their hp
    if (isDead(user)) {
        hp.textContent = 'Dead';
    } else {
        hp.textContent = user.hp;
    }
}

export function isDead(user) {
    return user.hp <= 0;
} 

export function findById(passedarray, id) {
    for (let i = 0; i < passedarray.length; i++) {
        const item = passedarray[i];
        // check the id against item.id
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function completedAllDungeons(dungeons, user) {
    // loop through each dungeon
    for (let i = 0; i < dungeons.length; i++) {
        const dungeon = dungeons[i];
        if (!user.completed[dungeon.id]) {
            return false;
        }
    }
    
    // why does this for each loop not do the same as for loop above
    // dungeons.forEach(dungeon => {
    //     // check if its dungeon id appears on the user completed object, if not user not done
    //     const dungeonId = dungeon.id;
    //     const userComplete = user.completed[dungeonId];
    //     if (!userComplete) {
    //         return false;
    //     }
    // });
    // if it makes it here all dungeons have passed
    return true;

}