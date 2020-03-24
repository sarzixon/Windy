export default class processResponse {
    constructor(res) {
        this.city = res.city.name;
        this.weatherArray = res.list;
        this.Date = this.weatherArray[0].dt_txt.split(' ')[0];
        this.hour = this.weatherArray[0].dt_txt.split(' ')[1];
    }
    weatherArrayPerSixHours() {
        this.weatherPer12Hours = [];
        for (let i = 0; i < this.weatherArray.length; i+=4) {
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
}