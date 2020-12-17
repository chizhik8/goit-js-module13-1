import { refs } from './refs/refs';
import { signIn, signUp } from './api/api';

import './styles.css';

console.log('refs', refs);
console.log('signIn, signUp:', signIn, signUp);


const user = {
    email: '',
    password: '',
};

refs.signUpForms.addEventListener('change', getUserData);

function getUserData(event) {
    event.preventDefault();
    // const name = event.target.name;
    // const value = event.target.value;
    const {name,value } = event.target;
    user[name] = value;
    console.log(user);
}



