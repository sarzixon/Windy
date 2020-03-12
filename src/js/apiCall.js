 import axios from 'axios';
 import {
     base
 } from './base';
 export async function apiCall(city) {
     try {
         const response = await axios.get(`http://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${city},pl&units=metric&appid=${base.APIkey}`);
         console.log(response);
     } catch (error) {
         console.log(error);
     }
 };