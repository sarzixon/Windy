import '../img/Github-logo/PNG/GitHub-Mark-120px-plus.png';
import '../img/Github-logo/PNG/GitHub-Mark-Light-32px.png';

import '../img/LinkedIn-Logos/LI-In-Bug.png';
import '../img/LinkedIn-Logos/LI-Logo.png';

import '../img/249124-weather/Group 13.png';
import '../img/249124-weather/Group 15.png';
import '../img/249124-weather/png/rain-1.png';
import '../img/favicon.ico';

import '../img/249124-weather/png/lightning.png';

import '../css/style.scss';
import {
    base,
    clearDOM,
    preloaderMarkup,
    loadHTML,
    weatherMarkup
} from './base';
import Search from './apiCall';
import processResponse from './response';
import glide from './slider';

let state = {};
const windyApp = async () => {
    // 1. read value from input 
    state.city = base.formInput.value;
    state.search = new Search(state.city);
    // 2. loader
        //clear view
        clearDOM(base.mainApp);
        // Insert html
        loadHTML(base.mainApp, preloaderMarkup);
        try {
        // 2. API CALL
            await state.search.apiCall();
            // console.log(state.search.response.data);
            // 4. proccess data
            state.response = new processResponse(state.search.response.data);
            state.response.weatherArrayPerSixHours();
            state.response.createSnapshots(); // Create object for every snapshot
            console.log(state.response);
            clearDOM(base.mainApp);
            // 5. display data
            loadHTML(base.mainApp, weatherMarkup);
            state.response.displaySnapshot();
            document.querySelector('.CityResponse').innerHTML = state.response.city;
            glide.mount();
        } catch(err) {
            console.log(err)
        }
};

base.formBtn.addEventListener('click', e => {
    e.preventDefault();
    windyApp();
});
base.form.addEventListener('subimt', e => {
    e.preventDefault();
    windyApp();
});