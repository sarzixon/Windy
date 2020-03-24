 import axios from 'axios';
 import {
     base
 } from './base';


 export default class Search {
     constructor(query) {
         this.query = query;
     }
     async apiCall() {
         try {
            this.response = await axios.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${this.query},pl&units=metric&appid=${base.APIkey}`);
         } catch (error) {
             console.log(error);
         }
     }
 }