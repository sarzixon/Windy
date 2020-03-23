import '../img/Github-logo/PNG/GitHub-Mark-120px-plus.png';
import '../img/Github-logo/PNG/GitHub-Mark-Light-32px.png';

import '../img/LinkedIn-Logos/LI-In-Bug.png';
import '../img/LinkedIn-Logos/LI-Logo.png';

import '../img/favicon.ico';

import '../img/249124-weather/png/lightning.png';

import '../css/style.scss';
import {
    base,
    clearDOM,
    preloaderMarkup
} from './base';
import Search from './apiCall';
import  loadHTML  from './preloader';

let state = {};
const windyApp = async () => {
    // 1. read value from input 
    const city = base.formInput.value;
    state.search = new Search(city);
    // 2. loader
        //clear view
        clearDOM(base.mainApp);
        // Insert html
        loadHTML(base.mainApp, preloaderMarkup);
        try {
        // 2. API CALL
            await state.search.apiCall();
            console.log(state);
            // 4. proccess data
            clearDOM(base.mainApp);

            
            // 5. display data
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