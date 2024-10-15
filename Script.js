let statusElement = document.getElementById('status');
let fechaElement = document.getElementById('fechaActual');
let cityElement = document.getElementById('ciudad');
let temperatureElement = document.getElementById('temperatura');
let velocidadElement = document.getElementById('velocidad');
let humedadElement = document.getElementById('humedad');
let visibilidadElement = document.getElementById('visibilidad');


const fechaActual = new Date();
let input = document.getElementById('inputCiudad');
let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let ciudad = input.value;
    if (ciudad !== '') {
        getWeather(ciudad);
    }
});

function actualizarClima(data) {
    statusElement.textContent = data.weather[0].description;
    fechaElement.textContent = fechaActual.toLocaleDateString();
    cityElement.textContent = data.name;
    temperatureElement.textContent = `${Math.round(data.main.temp)} °C`;
    velocidadElement.textContent = `${Math.round(data.wind.speed)} km/h`;
    humedadElement.textContent = `${Math.round(data.main.humidity)} %`;
    visibilidadElement.textContent = `${Math.round(data.visibility)/1000} km`;
}

async function getWeather(ciudad) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=sp&units=metric&appid=d09c865488ce0961a7246e89a84b1fba&units=metric`);

    const data = await response.json();
    actualizarClima(data);
}  