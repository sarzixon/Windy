import '../img/Github-logo/PNG/GitHub-Mark-120px-plus.png';
import '../img/Github-logo/PNG/GitHub-Mark-Light-32px.png';

import '../img/LinkedIn-Logos/LI-In-Bug.png';
import '../img/LinkedIn-Logos/LI-Logo.png';

import '../img/favicon.ico';

import '../img/249124-weather/png/lightning.png';

import '../css/style.scss';
import base from './base';
import {
    apiCall
} from './apiCall';


const windyApp = () => {
    console.log('works');
    // 1. read value from input 
    const city = base.formInput.value;
    console.log(city);
    // 2. API CALL
    //api.openweathermap.org/data/2.5/find?q=London&units=metric
    apiCall(city);

    // 3. loader
    // base.mainApp.innerHTML = '';
    // 4. proccess data

    // 5. display data
};

base.formBtn.addEventListener('click', e => {
    e.preventDefault();
    windyApp();
});
base.form.addEventListener('subimt', e => {
    e.preventDefault();
    windyApp();
});
