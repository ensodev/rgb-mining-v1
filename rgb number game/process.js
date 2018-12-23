// section one login process and the events calls

function login() {
    //validate card/pin/block number
    let card_numbers = document.getElementById("card-number").value;
    let pin_numbers = document.getElementById("pin-number").value;
    let block_numbers = document.getElementById("block-number").value;
    let cardNum = parseInt(card_numbers);
    let pinNum = parseInt(pin_numbers);
    let blockNum = parseInt(block_numbers);

    // validate login inputs
    if (cardNum == "" || isNaN(cardNum) || cardNum <= 9999999999999) {
        alert('Check your Card Number, This number cant be less than 14 digits, must be a number and cant be empty ');
        return;
    }

    if (cardNum > 99999999999999) {
        alert('Check your Card Number, must not be more than 14 digits');
        return;
    }

    if (pinNum == "" || isNaN(pinNum) || pinNum < 99999) {
        alert('Check your Pin Number, Pin must not be less than 6 digit, Must be a Number and cant be empty');
        return;
    }

    if (pinNum > 999999) {
        alert('Pin can\'t be more than 6 digits');
        return;
    }


    if (blockNum == "" || isNaN(blockNum)) {
        alert('Check your Block Number, cant be empty and must be a number');
        return;
    }

    if (blockNum < 1 || blockNum > 100) {
        alert('Check your Block Number, cant be less than 1 and must not be more than 100');
        return;
    }

    loginBtnDisable();
    startBtnEnable();
}

function startGame() {
    GameEnd();

    //* clear history here 
    textValues.splice(0, 21);
    GAMEResult.splice(0, 21);
    GAMEResult[0] = 'false';
    //* reset all array to 0
    GamePlayed++;
    rgbTextInputEnable();
    startBtnDisable();
    pinBoxEnable();
    historyRgbClear();

    GameEnd();

}

function logout() {
    //clear all text input and disable all neccessary button
    //log present player out
    textValues.splice(0, 21);
    GAMEResult.splice(0, 21);
    rgbTextInputClear();
    startBtnDisable();
    loginControlEnable();
    rgbTextInputdisable();
    rgbBtnBtnDisable();
    wonTotalLossClear();
    historyRgbClear();
    loginBtnEnable();
    RgbProgress = 1;
    GamePlayed = 0;

    TotalPoint = 30;
    TotalLoss = 0;
    document.getElementById('dollars').innerHTML = 0;

}

// this section get the game started it process of loop
function pinBoxClicked() {

    rgbTextInputdisable();  // disabled all RGB text input
    pinBoxDisable();
    RgbBtnStart();
    txtBtnCalls();

}


// this control the number of time to play the game before the game will end
// this function terminate the game imidiately the game reached the end
function GameEnd() {

    if (GamePlayed > 5) {
        alert('The end of the game reached please login and start a new season of game');
        startBtnDisable();
        LogoutBtnEnable();
        pinBoxDisable();
        rgbTextInputdisable();
        return;
    }
}
