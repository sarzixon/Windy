import {
    base, loadHTML
} from './base';

export default class processResponse {
    constructor(res) {
        this.city = res.city.name;
        this.weatherArray = res.list;
        this.Date = this.weatherArray[0].dt_txt.split(' ')[0];
        this.hour = this.weatherArray[0].dt_txt.split(' ')[1];
    }
    weatherArrayPerSixHours() {
        this.weatherPer12Hours = [];
        for (let i = 0; i < this.weatherArray.length; i += 4) {
            this.weatherPer12Hours.push(this.weatherArray[i]);
        }
    }
    createSnapshots() {
        this.Snapshots = [];
        this.weatherPer12Hours.forEach(el => {
            const snap = {};
            snap.city = this.city;
            snap.date = el.dt_txt.split(' ')[0];
            snap.time = el.dt_txt.split(' ')[1];
            snap.temp = el.main.temp.toFixed(1);
            snap.feelsLike = el.main.feels_like.toFixed(1);
            snap.pressure = el.main.pressure;
            snap.wind = el.wind.speed;
            snap.imgID = el.weather[0].id;
            snap.description = el.weather[0].description;
            this.Snapshots.push(snap);
        });
    }
    displaySnapshot() {
        this.Snapshots.forEach(el => {
            const snapshotMarkup = `
                            <li class="glide__slide">
                                <div class="weatherView">
                                    <div class="weatherView__date" id="weatherDate">${el.date}</div>
                                    <div class="weatherView__hour" id="weatherHour">${el.time}</div>
                                    <div class="weatherView__img"><img class="weatherView__img--img" id="weatherImg"
                                            src="../src/img/249124-weather/png/rain-1.png" alt="${el.imgID}"></div>
                                    <div class="weatherView__temp">
                                        <div class="temp underline" id="temp">${el.temp}&deg</div>
                                        <div class="feelsLike underline weatherView__div--align">
                                            <div>feels like:</div>
                                            <div id="feelsLike">${el.feelsLike}&deg</div>
                                        </div>
                                        <div class="weatherView__wind underline weatherView__div--align">
                                            <div>wind:</div>
                                            <div id="wind">${el.wind} m/s</div>
                                        </div>
                                        <div class="weatherView__pressure underline weatherView__div--align">
                                            <div>pressure</div>
                                            <div id="pressure">${el.pressure} Hpa</div>
                                        </div>
                                    </div>
                                </div>
                            </li>`;
                    loadHTML(document.querySelector('.glide__slides'), snapshotMarkup, 'beforeend');
        });

    }
}