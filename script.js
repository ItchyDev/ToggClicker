let money = 25;
let swaggleTons = 0;
let swagPriceMulti = 1; 
let strong = 0;
let strongPriceMulti = 1;
const click = document.querySelector(".clicker")
const display = document.querySelector(".moneycounter")
const moneyPerSecond = document.querySelector(".moneypersec")
//swag
const swagUpgrade = document.querySelector(".swagUpgrade")
const numberOfSwagCounter = document.querySelector(".swagText")
const swagCost = document.querySelector(".swagCost")
//strong
const strongUpgrade = document.querySelector(".strongUpgrade")
const strongCost = document.querySelector(".strongCost")
const numberOfStrongCounter = document.querySelector(".strongText")




//save and load functions 

function load(){
    //sets the money var to the saved value
money = localStorage.getItem('moneya');
    //logs the info     
console.log("LOADED "+ money+" $")

if(localStorage.getItem('swagtons') === null || localStorage.getItem('swagtons') === undefined){
    swaggleTons = 0 
}else{
    //loads the swaggletons from the last session 
swaggleTons = localStorage.getItem('swagtons');
    //logs the info     
console.log("LOADED "+ swaggleTons+" swaggletons")
}
if(localStorage.getItem('strongmen') === null || localStorage.getItem('strongmen') === undefined){
    strong = 0 
}else{
    //loads the swaggletons from the last session 
strong = localStorage.getItem('strongmen');
    //logs the info     
console.log("LOADED "+ strong+" strongmen")
}


updateDisplay();
}

function save(){
    //saves the money var into local storage under the name moneya
    localStorage.setItem('moneya', money);
    //logs this info
    console.log(`The value ${localStorage.moneya}$ was saved into local memory`)

    //swagtons save
    localStorage.setItem('swagtons', parseInt(swaggleTons));
    console.log(`The value ${localStorage.swaggleTons} swagton's was saved into local memory`)

    //strong save
    localStorage.setItem('strongmen', parseInt(strong));
    console.log(`The value ${localStorage.strongMen} strongmen was saved into local memory`)
    
   
}



//function for adding money per click takes parameter to allow for upgrades. 
function addMoneyPerClick(amount){
    money = money + amount
    console.log(money)
    updateDisplay();
}
//updates the display
function updateDisplay(){
    //rounds the money first so you dont get a deci
    money = Math.round(money);
    //updates money counter based on money var
    display.textContent = money+" $"
    


    // swag updates .................. 
let totalMoneyPerSec = parseInt(swaggleTons) + (parseInt(strong * 5))
    //money per sec formula
    moneyPerSecond.textContent = `You currently get ${totalMoneyPerSec}$ per second`
    //counts swaggletons to display
    numberOfSwagCounter.textContent = `You have ${swaggleTons} swaggletons!!!!!!!!!!!`
    //calculate how much the next swag will cost 
    swagCost.textContent = "The next swaggleton will cost "+ Math.round(25 * swagPriceMulti )+ "$"
    strongCost.textContent = "The next strongman will cost "+ Math.round(100 * strongPriceMulti )+ "$"
    numberOfStrongCounter.textContent = `You have ${strong} strongmen!!!!!!!!!`

    
}

//Swag Code..................................


//adds money based on the number of swag's then calls update display
function swagTon(){
    if(swaggleTons>0){
    money = parseInt(money) + parseInt(swaggleTons);
    console.log(swaggleTons+" Money swag added")
    updateDisplay();
    }
    
}
//function that adds one swag as part of functionality for the upgrade button  and next cost 
function addSwag(){
    if(money >= 25* swagPriceMulti){
    swaggleTons = parseInt(swaggleTons) + 1 
    money = money - (25* swagPriceMulti)
    //How much the next swag will cost
    swagPriceMulti = swagPriceMulti * 1.2

    updateDisplay();

    }else{
        alert("you dont have enough money")
    }
}

swagUpgrade.addEventListener("click", function(){
addSwag()
})

//Strong Code ..........................
strongUpgrade.addEventListener("click", function(){
    addStrongMen();
    })
//add money based on the number of strong men
function strongMen(){
    if(strong>0){
    money = parseInt(money) + parseInt(strong) * 5;
    console.log(`Your strong men have made ${strong * 5}$ for you`)
    updateDisplay();
    }
    
}
//function that adds one strong as part of functionality for the upgrade button  and next cost 
function addStrongMen(){
    if(money >= 100 * strongPriceMulti){
    strong = parseInt(strong) + 1 
    money = money - (100* strongPriceMulti)
    //How much the next swag will cost
    strongPriceMulti = strongPriceMulti * 1.3
        console.log("strong men added" + strong)
    updateDisplay();

    }else{
        alert("you dont have enough money")
    }
}



//event listener for clicking the head
click.addEventListener("click", function(){
    addMoneyPerClick(1);
});



load();

//adds swag money every second 
const strongUpdater = setInterval(strongMen, 1000)
const swagUpdater = setInterval(swagTon, 1000)

//updates display
const updateDisplayInterval = setInterval(updateDisplay, 500);
updateDisplay();
console.log(money)
