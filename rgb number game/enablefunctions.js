// this file contain all the method that enable controls
// and input text and other dom's that output values and 
// relevant informations

// when ever login control is pressed
// the following doms and input are enabled
function loginControlEnable() {

    document.getElementById("card-number").disabled = false;
    document.getElementById("pin-number").disabled = false;
    document.getElementById("block-number").disabled = false;

    document.getElementById("card-number").value = "11111111111111";
    document.getElementById("pin-number").value = "111111"
    document.getElementById("block-number").value = "1";

}

// all input text enabled, mostly after when key start is pressed
// this loop through the botton using the id name
function rgbTextInputEnable() {
    const BTN = "text-btn-btn";
    for (let i = 1; i < 21; i++) {
        document.getElementById(BTN + i.toString()).disabled = false;
    }
}


// this turn all rgb button on
// note this function is not used in this program but the need 
// miight show up in the future
function rgbBtnBtnEnable() {
    const RGB = "btn-btn";
    for (let j = 1; j < 21; j++) {
        document.getElementById(RGB + j.toString()).disabled = false;
    }
}

// enable some doms when login() function executed some doms needs and buttons needs to be anabled
// this also happen when the site loads
function loginBtnEnable() {
    document.getElementById("card-number").disabled = false;
    document.getElementById("pin-number").disabled = false;
    document.getElementById("block-number").disabled = false;
    document.getElementById("login-login").disabled = false;
    document.getElementById("login-logout").disabled = true;
}

// enable the pinbox when all verification is pass for input of guess figures in the input text
function pinBoxEnable() {
    document.getElementById("btn-btn-pin").disabled = false;
}

// enable  the start button
function startBtnEnable() {
    document.getElementById("start-end").disabled = false;
}

function LogoutBtnEnable() {
    document.getElementById("login-logout").disabled = false;
}



