const inputBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon');


const apiKey = "ffa8e8b99892ef67b8a1bfa4d1a3f75f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    let respons = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // if page 404 tahle
    if(respons.status === 404){
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    };
    let data = await respons.json();
        //output innerHTMLs
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
    document.querySelector('.wind').innerHTML = data.wind.speed +  ' km/h';

    // imgages add condition
    if(data.weather[0].main === 'Clear'){
        weatherIcon.src = 'images/clear.png';
    }else if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = 'images/cloud.png';
    }else if(data.weather[0].main === 'Rain'){
        weatherIcon.src = 'images/rain.png';
    }else if(data.weather[0].main === 'Mist'){
        weatherIcon.src = 'images/mist.png';
    }else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';
    }
console.log(data);
    // displa condition
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error-message').style.display = 'none';
};


searchBtn.addEventListener('click', ()=> {
    checkWeather(inputBox.value);
});
