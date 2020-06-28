const api = {
    key: "aa55c74332855d54bd1a354d145861f6",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}


function displayResults(weather) {
    console.log(weather)
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°f / ${Math.round(weather.main.temp_max)}°f`;

    if (weather_el.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('images/cloudy.jpg')";

    }
    if (weather_el.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('images/rain.jpg')";

    }
    if (weather_el.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";

    }
    if (weather_el.textContent == 'Sunny') {
        document.body.style.backgroundImage = "url('images/Sunny.jpg')";

    }
    if (weather_el.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('images/snow.jpg')";

    }
    if (weather_el.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('images/mist.jpg')";
    }
    if (weather_el.textContent == 'Dust') {
        document.body.style.backgroundImage = "url('images/Dust.jpg')";
    }
    if (weather_el.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('images/haze.jpg')";
    }
}


function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

function realtimeClock() {
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = (hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML =
        hours + "  :  " + minutes + "  :  " + seconds + " " + amPm + "(Eastern)";
    var t = setTimeout(realtimeClock, 500);



}