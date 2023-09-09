let money = 25;
let swaggleTons = 0;
let swagPriceMulti = 1; 
const click = document.querySelector(".clicker")
const display = document.querySelector(".counter")
const moneyPerSecond = document.querySelector(".moneypersec")
const swagUpgrade = document.querySelector(".swagUpgrade")
const numberOfSwagCounter = document.querySelector(".swagText")
const swagCost = document.querySelector(".swagCost")

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
    
    //money per sec formula
    moneyPerSecond.textContent = `You currently get ${swaggleTons}$ per second`
    //counts swaggletons to display
    numberOfSwagCounter.textContent = `You have ${swaggleTons} swaggletons!`
    //calculate how much the next swag will cost 
    swagCost.textContent = Math.round(25 * swagPriceMulti )
}

//Swag Code..................................

const swagUpdater = setInterval(swagTon, 1000)

//adds money based on the number of swag's then calls update display
function swagTon(){
    money = money + swaggleTons
    let amountAdded = money + swaggleTons
    if(swaggleTons>0){
    console.log(amountAdded+" Money swag added")
    }
    updateDisplay();
}
//function that adds one swag as part of functionality for the upgrade button 
function addSwag(){
    if(money >= 25* swagPriceMulti){
    swaggleTons = swaggleTons + 1 
    money = money - (25* swagPriceMulti)
    swagPriceMulti = swagPriceMulti * 1.1

    updateDisplay()

    }else{
        alert("you dont have enough money")
    }
}

swagUpgrade.addEventListener("click", function(){
addSwag()
})



//event listener for clicking the head
click.addEventListener("click", function(){
    addMoneyPerClick(1);
});





updateDisplay();
console.log(money)
