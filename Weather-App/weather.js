//url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`

const sehirler = document.querySelector(".cities");
const form = document.querySelector("form");
console.log(form);
const input = document.querySelector(".input");
const containerDiv = document.querySelector(".container");

const apiKey = "4e420f81975b92a5bdf9fc75196c068e";
const units = "metric";
const lang = "tr";


const getWeather = async (e) => {
  e.preventDefault();
  // console.log(e);
let data=""
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=${units}&lang=${lang}`
    );

    if (response.ok) {
      data = await response.json();
       
      console.log(data);
    } else {
      errorMsg();
    }
    createWeather(data)
  } catch (error) {
    errorMsg();
  }
};
const errorMsg = () => {
  //containerDiv.innerHTML = `<img src="./image/error.gif" />`
};
function createWeather(sehir) {
  
  input.value=""
  const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${sehir.weather[0].icon}.svg`;
  // console.log(sehir);
  // console.log(sehir.name);
  // console.log(sehir.main.temp);
  // console.log(sehir.weather[0].icon);
  // console.log(sehir.weather[0].main);

  const element = document.createElement("li")
  element.innerHTML += `
  <div class=" text-bg-light w-75 shadow p-3 mb-2 bg-body-tertiary rounded">
   
    <p class="display-6">${sehir.name}<sup><span class=" text-bg-warning rounded text-light">tr </span></sup></p>
    <p class="font-weight-bold display-2">${parseInt(sehir.main.temp)}°C</p>
    <div class="display-6"><img src=${iconUrl}></div>
    <p class="text-uppercase">${sehir.weather[0].main}</p>
   
    </div>
    `;
  sehirler.appendChild(element);
  
};

// window.addEventListener("load", getWeather)
form.addEventListener("submit", getWeather);
