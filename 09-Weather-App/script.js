const apiKey = '37baf30e1f5fa9469879753cf17a0c1a';

const weatherDataElement = document.getElementById('weather-data');
const cityInput = document.getElementById('city-input');

const formElement = document.querySelector('form');


formElement.addEventListener('submit', async (event) => {

  event.preventDefault();
  const cituValue = cityInput.value.trim();
  
  getWeatherData(cituValue);
  
})

async function getWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    if(!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();

    const temperature = data.main.temp;

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;

    const detaila = [
      `Feels like: ${data.main.feels_like}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind Speed: ${data.wind.speed} m/s`,
    ]

    weatherDataElement.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;

    weatherDataElement.querySelector('.temperature').textContent = `${temperature}°C`;
    
    weatherDataElement.querySelector('.description').textContent = description.charAt(0).toUpperCase() + description.slice(1);

   weatherDataElement.querySelector('.detail').innerHTML = detaila.map((item) => `<div>${item}</div>`).join('');

   

    


    console.log(data);
    
  } catch (error) {
    weatherDataElement.querySelector('.icon').innerHTML = ``;

    weatherDataElement.querySelector('.temperature').textContent = ``;
    
  
   weatherDataElement.querySelector('.description').textContent = 'An error occurred please try again';
  }
}