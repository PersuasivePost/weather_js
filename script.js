const apiKey = "1c4a0bb984dfc36ce8c90cdd94b57e9f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    //
    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = data.main.temp + "°c";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "kmph";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png";
    }

    // document.querySelector(".weather").style.dislay = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});