import { getUser } from '../data/user-api.js';

// to load the stuff in the header
export function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    // get the user data
    const user = getUser();
    
    name.textContent = 'Name: ' + user.name;
    avatar.src = '../assets/user/' + user.character + '.png';
    
    gold.textContent = 'Rupies: ' + user.gold;

    // check if user is dead, if are show they died, if not show their hp
    if (isDead(user)) {
        hp.textContent = 'Dead';
    } else {
        hp.textContent = 'HP: ' + user.hp;
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
    
    // i got stuck on this for so long, because it seemed to work the same as the for loop
    // the for loop seems to function as intended, while the forEach does not
    // I think the forEach loops through but instead of returning false and exiting it returns true
    // not sure why this is
    // so my question is why does this for each loop not do the same as for loop above
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























