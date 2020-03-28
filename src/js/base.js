 const base = {
     formInput: document.querySelector('.searchInput'),
     formBtn: document.querySelector('.searchBtn'),
     form: document.querySelector('.searchForm'),
     mainApp: document.querySelector('.app'),
     APIkey: 'c4236337d72ddecbcaa0a486a186272b'
 };

 const clearDOM = (div, markup = '') => {
     div.innerHTML = markup;
 }
 const loadHTML = (parent, markup, position = 'afterbegin') => {
     parent.insertAdjacentHTML(position, markup);
 }

 const preloaderMarkup = `
        <div class="container">
            <header class="app__header">
                <img src="../src/img/249124-weather/png/lightning.png" alt="lightning">
                <h1>WINDY !</h1>
            </header>
            <div class="preloader">
                <div class="preloader__wind preloader__wind--left">
                    <img src="../src/img/249124-weather/png/wind.png" alt="wind image" class="preloader__wind--img">
                </div>
                <img src="../src/img/249124-weather/png/earth.png" alt="Earth image" class="preloader__earth">
                <div class="preloader__wind preloader__wind--right">
                    <img src="../src/img/249124-weather/png/wind.png" alt="wind image" class="preloader__wind--img">
                </div>
            </div>
            <h2 class="preloader__sentence">Waiting for good wind...</h2>
        </div>`;
    const  weatherMarkup = `        
        <div class="container">
            <header class="app__header weather__result">
                <img class="weather__result--align" src="../src/img/249124-weather/png/lightning.png" alt="lightning">
                <h1>WINDY !</h1>
            </header>
            <h2 class="city__header">Weather in <span class="CityResponse">Warsaw</span> </h2>
            <div class="slider">
                <div class="glide">
                    <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                            
                        </ul>
                    </div>
                    <div class="glide__arrows" data-glide-el="controls">
                        <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><img
                                src="../src/img/249124-weather/Group 15.png" alt=""></button>
                        <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><img
                                src="../src/img/249124-weather/Group 13.png" alt=""></button>
                    </div>
                </div>
            </div>
        </div>`;

 export {
     base,
     clearDOM,
     preloaderMarkup,
     loadHTML,
     weatherMarkup
 };