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

    // dag - tid - (datum)
    todayDisplay.textContent = veckoDagar[currentDay] + " kl: " + date.getHours() + ":" + date.getMinutes() +  ":" + date.getSeconds() + " (" + (date.getMonth() + 1) + "/" + date.getDate() +")"


  }, 1000)
  return date.getHours() + ":" + date.getMinutes().toString().padStart(2, '0')
};



console.log(formatTime())
