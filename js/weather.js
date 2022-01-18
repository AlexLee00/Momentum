// const API_KEY = "ec3bd086d6a993a9bb67513ebff0a4ae";

// function onGeoOK(position) {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//     fetch(url).then(response => response.json().then(data => {
//         const weather = document.querySelector("#weather span:first-child");
//         const city = document.querySelector("#weather span:last-child");
//         city.innerText = data.name;
//         weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
//     }));
// }

// function onGeoError() {
//     alert("당신의 위치를 찾을 수 없어 날씨를 확인할 수 없습니다.")
// }


// navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

const API_KEY = "ec3bd086d6a993a9bb67513ebff0a4ae";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

const weather = document.querySelector(".js-weather .weather__text");

function getWeather(coords) {
  fetch(
    `${WEATHER_API}lat=${coords.lat}&lon=${
      coords.lng
    }&appid=${API_KEY}&units=metric`
  )
    .then(response => response.json())
    .then(json => {
      const name = json.name;
      const temperature = json.main.temp;
      weather.innerHTML = `${Math.floor(temperature)}° @ ${name}`;
    });
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const coords = {
    lat,
    lng
  };
  localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coords);
}

function handleGeoFailure() {
  console.log("no location");
}

function loadWeather() {
  const currentCoords = localStorage.getItem("coords");
  if (currentCoords !== null) {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords);
    return;
  } else {
    navigator.geolocation.getCurrentPosition(
      handleGeoSuccess,
      handleGeoFailure
    );
  }
}

function init() {
  loadWeather();
}

init();
