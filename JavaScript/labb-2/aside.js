async function fetchData(path){
    const data = await fetch(path).then(response => response.json());
    return data;
}
const aside =  document.querySelector("#specials-menu"); 

async function getAllSpecials(){

    const url = "../labb-2/data/specials.json";
    const specialsData = await fetchData(url);

    let tempSpecialsData = specialsData.weeklySpecialsMenu;
    const specialsDataArray = Object.values(tempSpecialsData);
    
   let content = ` `; 

    for(let i = 0; i< specialsDataArray.length; i++){
        const weekDay = getWeekDayName(i); 
        
        const lunch = specialsDataArray[i][0]
       
        const middag = specialsDataArray[i][1]
        
       
        content += `
        <h4>${weekDay}</h4>
          <p>Lunch: ${lunch.name}, ${lunch.description}</p>
          <p>Middag: ${middag.name}, ${middag.description}</p>
          ` 
    }
    
    const weeklyMenu = document.createElement("div"); 
    weeklyMenu.innerHTML = content; 

    aside.appendChild(weeklyMenu);
}

// metod to get the weekday
function getWeekDayName(weekDayIndex){
    const WeekDays =["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"]; 
    return WeekDays[weekDayIndex]; 
}

const menuBar = document.querySelector(".menu-toggle");

//opens nav-bar when it is is closed and closes it when it is open
menuBar.addEventListener("click", function(ev){
    if(!ev.currentTarget.classList.contains("nav-open")){

        aside.classList.add("specials__menu--open");
        menuBar.classList.add("nav-open");
    }
    else{
        aside.classList.remove("specials__menu--open");
        menuBar.classList.remove("nav-open");
    }
})

getAllSpecials();