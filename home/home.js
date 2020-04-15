import { saveUser, makeUser } from '../data/user-api.js';

const signUpForm = document.getElementById('user-sign-up');

signUpForm.addEventListener('submit', (event) => {
    // stop page from reloading
    event.preventDefault();

    // get the actual form data
    const formData = new FormData(signUpForm);
    // make a user with that form data
    const user = makeUser(formData);
    // save that user to local storage
    saveUser(user);

    window.location = 'map';
});