import { refs } from './refs/refs';
import { signIn, signUp } from './api/api';
import './styles.css';


console.log('refs', refs);

const user = {
    email: '',
    password: '',
};

refs.signUpForms.addEventListener('input', getUserData);
refs.signUpForms.addEventListener('submit', signUpData);


function getUserData(event) {
    const {name,value } = event.target;
    user[name] = value;
    console.log(user);
}

function signUpData(event) {
    event.preventDefault();
    console.log(event);
    console.log(user);
    signUp(user).then(response => console.log(response));
    
}

