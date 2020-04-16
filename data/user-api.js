// saving user to local storage
export function saveUser(user) {
    const temp = JSON.stringify(user);
    localStorage.setItem('USER', temp);
}

// getting user from local storage
export function getUser() {
    const temp = localStorage.getItem('USER');
    // if it doesn't exist return null
    if (!temp) {
        return null;
    }
    // get in object
    const user = JSON.parse(temp);
    return user;
}

export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character-choice'),
        hp: 100,
        gold: 0,
        completed: { },
    };
    return user;
}