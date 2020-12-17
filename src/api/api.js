import axios from 'axios';

const API_KEY = 'AIzaSyCvlfAYmXyF6M3Lkc8n7wcZNhb_PEhS_fM';
const baseURL = '';
const signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;


const signUp = user => {
    return axios.post(signUpURL, user);
};

const signIn = user => {
    return axios.post(signInURL, user);
};


export { signIn, signUp };