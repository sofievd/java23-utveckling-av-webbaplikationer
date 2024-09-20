const buttonList = document.querySelectorAll(".options");
const grillButton = buttonList[0];
const snacksButton = buttonList[1];
const drinksButton = buttonList[2];


async function fetchMenuData(path){
    const data = await fetch(path).then(response => response.json());
    return data;
}
//TODO: funcktion for finding value of button that is clicked. 
// find button. if button has class --active -> get value. 
// if button that has not class active is clicked -> add active to class and remove active from the other button that had active before

async function getMenu(value){
    const url = "../labb-2/data/menu.json";
    const menuData = await fetchMenuData(url);
    if(value == "Grill"){
        const itemData = menuData.Grill;
        let content = ` `; 
    
        for(let i = 0; i< itemData.length; i++){
            content += `
            <h2> ${itemData[i].name} </h2>
            <p> ${itemData[i].description} </p>
            <p> price:  ${itemData[i].price} kr</p> `
        }
    
        document.querySelector("#content").innerHTML = content;
    }
    if(value == "Snacks"){
        const itemData = menuData.Snacks;
        let content = ` `; 
    
        for(let i = 0; i< itemData.length; i++){
            content += `
            <h2> ${itemData[i].name} </h2>
            <p> ${itemData[i].description} </p>
            <p> price:  ${itemData[i].price} kr</p> `
        }
    
        document.querySelector("#content").innerHTML = content;
    }
    if(value == "Drycker"){
        const itemData = menuData.Drycker;
        let content = ` `; 
    
        for(let i = 0; i< itemData.length; i++){
            content += `
            <h2> ${itemData[i].name} </h2>
            <p> ${itemData[i].description} </p>
            <p> price:  ${itemData[i].price} kr</p> `
        }
    
        document.querySelector("#content").innerHTML = content;
    }
    
}

grillButton.addEventListener("click", grillClickHandler)
snacksButton.addEventListener("click", snacksClickHandler)
drinksButton.addEventListener("click", drinksClickHandler)


function grillClickHandler(){
    if(!grillButton.classList.contains("options--active")){
 
    // remove options active from  
    for(let i=0; i < buttonList.length; i++){
        if(buttonList[i].classList.contains("options--active")){
            buttonList[i].classList.remove("options--active")
        }
    } 
    // add options--active class to the clicked button
    grillButton.classList.add("options--active")
    // show menu of clicked button
    let itemValue= grillButton.value; 
    getMenu(itemValue); 
    }
    else{
        let itemValue= grillButton.value; 
        getMenu(itemValue); 

    }

}

function snacksClickHandler(){
    if(!snacksButton.classList.contains("options--active")){
 
    // remove options active from  
    for(let i=0; i < buttonList.length; i++){
        if(buttonList[i].classList.contains("options--active")){
            buttonList[i].classList.remove("options--active")
        }
    } 
    // add options--active class to the clicked button
    snacksButton.classList.add("options--active")
    let itemValue= snacksButton.value; 
    getMenu((itemValue)); 
    }
    else{
        let itemValue= snacksButton.value; 
        getMenu(); 
    }
}

function drinksClickHandler(){
    if(!drinksButton.classList.contains("options--active")){
 
    // remove options active from  
    for(let i=0; i < buttonList.length; i++){
        if(buttonList[i].classList.contains("options--active")){
            buttonList[i].classList.remove("options--active")
        }
    } 
    // add options--active class to the clicked button
    drinksButton.classList.add("options--active")

    let itemValue= drinksButton.value; 
    getMenu((itemValue)); 
    }
    else{
        let itemValue= drinksButton.value; 
        getMenu(itemValue); 
        console.log(itemValue)
    }
}
getMenu("Grill")