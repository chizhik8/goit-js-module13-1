import axios from 'axios';

const API_KEY = '';
const baseURL = '';
const signUpURL = '';
const signInURL = '';

function signUp(user) {
    // body
    axios.post(signUpURL, user);
};

function signIn(user) {
    // body
    axios.post(signInURL, user);
};

export { signIn, signUp };