// this file contains all the deasbled element
// some in arryas and some in varable

// card verifications disable after game starts
function loginControlDisable() {
    document.getElementById("card-number").disabled = true;
    document.getElementById("pin-number").disabled = true;
    document.getElementById("block-number").disabled = true;
}

// input text disabled after player clicked the pin Box button
// loop through the buttons and disabled them
function rgbTextInputdisable() {
    const BTN = "text-btn-btn";
    for (let a = 1; a < 21; a++) {
        document.getElementById(BTN + a.toString()).disabled = true;
    }
}

// clear all the input text after logout button is pressed
function rgbTextInputClear() {
    const BTNclaer = "text-btn-btn";
    for (let i = 1; i < 21; i++) {
        document.getElementById(BTNclaer + i.toString()).value = 0;
    }
}

// disabled all rgbButons when game has not start
function rgbBtnBtnDisable() {
    const RGB = "btn-btn";
    for (let j = 1; j < 21; j++) {
        document.getElementById(RGB + j.toString()).disabled = true;
    }
}

// clear the result panel when game ends and before game start
function wonTotalLossClear() {
    document.getElementById("won-win").innerText = 00;
    document.getElementById("won-total").innerText = 00;
    document.getElementById("won-loss").innerText = 00;
}

// clear history result whenever another game starts
function historyRgbClear() {
    const HisSpan = "historyRGB"
    for (let k = 1; k < 21; k++) {
        document.getElementById(HisSpan + k.toString()).innerHTML = 00;
    }
}

// disabled the login button when game starts and after it has been pressed
// also confirm and make sure relevant disabled object are disabled follows
function loginBtnDisable() {
    document.getElementById("card-number").disabled = true;
    document.getElementById("pin-number").disabled = true;
    document.getElementById("block-number").disabled = true;
    document.getElementById("login-login").disabled = true;
    document.getElementById("login-logout").disabled = false;
}

//pin box disabled after being pressed and when game has not started
function pinBoxDisable() {
    document.getElementById("btn-btn-pin").disabled = true;
}

// start button disabled 
function startBtnDisable() {

    document.getElementById("start-end").disabled = true;
}

function LogoutBtnDisable() {
    document.getElementById("login-logout").disabled = true;
}
