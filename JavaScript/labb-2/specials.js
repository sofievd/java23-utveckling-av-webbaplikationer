

async function fetchData(path){
    const data = await fetch(path).then(response => response.json());
    return data;
}

let today = new Date();

let specialsTitle = document.querySelector("#specials-title");
let specialContent = document.querySelector("#specials__content");
let jsLoading = document.querySelector("#js-loading");
const button = document.querySelector(".button--specials"); 

async function getSpecials(now){
    const url = "../labb-2/data/specials.json";
    const specialsData = await fetchData(url);
    
    let tempSpecialsData = specialsData.weeklySpecialsMenu;
    const specialsDataArray = Object.values(tempSpecialsData);
        
    let dayIndex = getDateIndex(now.getDay()); 
    let currentWeekDay = getWeekDayName(dayIndex); 
    const currentHour =  now.getHours(); 
    const specialsMealData = getMealTypeAndTime(currentHour); 
    
    let mealType = specialsMealData[0];
    let timeIndex = specialsMealData[1];

    if(currentHour > 20){
        dayIndex = getDateIndex(today.getDay()+1)   
        currentWeekDay = getWeekDayName(dayIndex) ;
    }
    
    const currentDaySpecial =specialsDataArray[dayIndex][timeIndex];
       
    createContent(currentDaySpecial, mealType, currentWeekDay);
}

getSpecials(today);


// method to get lunch or dinner depending on time
function getMealTypeAndTime(currentHour){
    let mealType; 
    let timespan;
    if( currentHour <= 14){
        mealType = "lunch";
        timespan= 0
    }
    if(currentHour > 14 && currentHour <= 20){
        mealType = "middag";
        timespan = 1;
    }
    if(currentHour > 20){
        mealType = "lunch";
        timespan = 0;
    }
    const mealData = [mealType, timespan];
    return mealData;
}

// method to show the special on HTML 
function createContent(dailySpecial, mealType, currentWeekDay){
    specialsTitle.textContent= `${currentWeekDay}s ${mealType}`
    specialsTitle.style.marginBottom = "0.2rem";

    //TODO:  add if statement that replaces the conent after puch of the button

    
    //let specialsHeader = document.querySelector(".specials__header"); 
    let specialsTime = document.createElement("p"); 
    specialsTime.textContent = dailySpecial.time; 
    specialsTime.style.marginTop = "0";
    
    specialContent.appendChild(specialsTime); 

    let specialsHeader = document.querySelector(".specials__header"); 
    let specialsDescription = document.querySelector(".specials-content-p")

    if(specialsHeader){
        specialsHeader.remove(); 
        specialsDescription.remove();
        specialsTime.remove()
    }


    specialsHeader = document.createElement("div");
    specialsHeader.setAttribute("class", "specials__header"); 
    
    let specialsDishName = document.createElement("p"); 
    specialsDishName.setAttribute("id", "specials-dish-name"); 
    specialsDishName.textContent = dailySpecial.name
    
    let specialsPrice = document.createElement("p");
    specialsPrice.setAttribute("id", "specials-price"); 
    specialsPrice.textContent = dailySpecial.price + " kr"; 
   
    specialsDescription = document.createElement("p"); 
    specialsDescription.setAttribute("class", "specials-content-p")
    specialsDescription.textContent = dailySpecial.description;
    
    specialsHeader.appendChild(specialsDishName); 
    specialsHeader.appendChild(specialsPrice); 
        
    specialContent.appendChild(specialsHeader); 
    
    
    specialContent.appendChild(specialsDescription);
    
    specialContent.className = ".specials__content--loaded";
    jsLoading.classList.add("hidden");
    
}

let state = true; 
//console.log(button)
button.addEventListener("click", showYesterdayspecials)

// method to get the menu of the next day 

function getYesterday(now){
    let yesterday = new Date(today); 
    yesterday.setDate(yesterday.getDate()-1)
    return yesterday
}

// method to get yesterdays specials 
function showYesterdayspecials(){
    let yesterday = getYesterday(today);
    
    if(state){
        getSpecials(yesterday); 
        button.textContent = "Idags";
    } else{
        getSpecials(today); 
        button.textContent = "Gårdagens"
    }
    state =!state

}


// metod to get the weekday
function getWeekDayName(weekDayIndex){
    const WeekDays =["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"]; 
    return WeekDays[weekDayIndex]; 
}

function getDateIndex(index){

    if(index == 0){
        return 6
    }
    else{
        return index-1
    }
}