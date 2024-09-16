const url = "./weather.json";

async function fetchWeather(path) {
  const data = await fetch(path)
    .then(response => response.json())

    return data
}

// console.log(fetchWeather(url))

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
