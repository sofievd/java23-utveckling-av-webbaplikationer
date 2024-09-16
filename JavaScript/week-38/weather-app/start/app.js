
async function fetchWeather(path) {
  const data = await fetch(path)
    .then(response => response.json())

    return data
}

const url = "./weather.json";
// console.log(fetchWeather(url))

async function renderWeather() {

  const weatherData = await fetchWeather(url)
  const currentFormattedDate = date.toISOString().substring(0, 10)

  const currentDayWeather = weatherData.weather_data
    .find(data => currentFormattedDate === data.date)
  
  console.log(currentDayWeather.temperatures)

  // filter weatherData to find current day
  // console.log(weatherData.weather_data[15].date);
  
  // console.log(currentFormattedDate);
}

renderWeather()

const todayDisplay = document.querySelector("#today");

const veckoDagar = [
  "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"
];

let date = new Date();
const currentDay = date.getDay()
const formatDate = date.getDate() + "/" + (date.getMonth() + 1)

const formatTime = () => {
  setInterval(() => {
    date = new Date()

    const currentHour = date.getHours()
    const currentMinute = date.getMinutes().toString().padStart(2, '0');
    const currentSecond = date.getSeconds().toString().padStart(2, '0')
    const currentDate = `(${(date.getMonth() + 1)}/${date.getDate()})`
    const currentDay2 = veckoDagar[currentDay];

    // dag - tid - (datum)
    todayDisplay.textContent = `
    ${currentDay2} kl: ${currentHour}:${currentMinute}:${currentSecond} ${currentDate}
    `

  }, 1000)
};

formatTime()



/*
  "weather-times": [
    "morning-midday-evening"
  ],
    "weather_data": [
    {
      "date": "2024-10-01",
      "temperatures": "15°C-20°C-18°C",
      "humidity": "High"
    },
    //...
  ]
*/