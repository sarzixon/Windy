 const base = {
     formInput: document.querySelector('.searchInput'),
     formBtn: document.querySelector('.searchBtn'),
     form: document.querySelector('.searchForm'),
     mainApp: document.querySelector('.app'),
     APIkey: '698237f90dda522cb515276920294914'
 };

 const clearDOM = (div, markup = '') => {
     div.innerHTML = markup;
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

 export {
     base,
     clearDOM,
     preloaderMarkup
 };