//Global variables

const textValues = new Array(); // text input arrays
let GAMEResult = new Array(); // rgb generated arrays when randi() and rndi2() function is loaded
let GamePlayed = 0; // stores number of game played
let RgbProgress = 1;
let TotalPoint = 30;
let TotalLoss = 0;
let Dollars;


//let dollarOut  = dollars;


//get the random number and populate an array to store number generated for each button
// generate number between 1 and 10
// disable each button after clicking so it cant be clicked again
// enable the next button for click event
// populate the neccessary variable needed for game information
function randi() {
    let higher = 10;
    let lower = 1;
    let result = Math.floor(Math.random() * (higher - lower + 1)) + lower;

    GAMEResult.push(result);  // Push the result into Array 

    RgbProgress++; // increase the value for next button id numbers 

    rgbBtnBtnDisable(); // all button reconfirmed disabled

    document.getElementById("btn-btn" + RgbProgress.toString()).disabled = false;  //enable the next button

    // populate Dom, with id's win total loss
    document.getElementById("won-win").innerHTML = TotalPoint;
    document.getElementById("won-total").innerHTML = GamePlayed;
    document.getElementById("won-loss").innerHTML = TotalLoss;


    displayDollar(); // display the total number of $dollars made and store the value in dollars variable

}

// calculate amount made and store values in dollars variable
function displayDollar() {

    let dollars = document.getElementById('dollars');
    dollars.innerHTML = `${parseInt(TotalPoint / 3)}`;
    document.getElementById('dollars').innerHTML = `$${parseInt(TotalPoint / 3)}`;
    Dollars = dollars;
}

// run when the last button is clicked btn-btn20
function randi2() {

    let higher = 10;
    let lower = 1;
    let result = Math.floor(Math.random() * (higher - lower + 1)) + lower;
    // alert(result);

    GAMEResult.push(result); // add result to array of containg results value

    rgbBtnBtnDisable();
    startBtnEnable();
    loginBtnDisable();
    DisplayResults();
    displayDollar();

}

// increase game progress variable when new game start
function RgbBtnStart() {
    RgbProgress = 1
    document.getElementById("btn-btn1").disabled = false;
}

// first button disabled
function RgbBtnEnd() {
    document.getElementById("btn-btn1").disabled = true;
}