import '../css/style.scss';
import base from './base';
import { apiCall } from './apiCall';


    const windyApp = () => {
        base.formBtn.addEventListener('click', () => {
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
            });
    };
    windyApp();