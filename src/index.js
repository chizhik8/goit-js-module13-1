import { refs } from './refs/refs';
import { signIn, signUp, addBase } from './api/api';
import './styles.css';


console.log('refs', refs);

const user = {
    email: '',
    password: '',
};

refs.signUpForms.addEventListener('input', getUserData);
refs.signUpForms.addEventListener('submit', signUpData);
refs.signInForms.addEventListener('input', getUserData);
refs.signInForms.addEventListener('submit', signInData);


function getUserData(event) {
    const {name,value } = event.target;
    user[name] = value;
    // console.log(user);
}

function signUpData(event) {
    event.preventDefault();
    // console.log(event);
    // console.log(user);
    signUp(user).then(response => console.log(response));
    refs.signUpForms.reset();
    resetUser();
}

function signInData(event) {
    event.preventDefault();
    // console.log(event);
    // console.log(user);
    signIn(user).then(response => console.log(response));
    refs.signInForms.reset();
    resetUser();
}

function resetUser () {
    user.email = '';
    user.password = '';
}

