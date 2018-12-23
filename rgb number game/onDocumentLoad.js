
//run when game load
//this funtion is responsible for enabling some element and disabling some
// at the begining of the game.
function mainDocumentLoad() {

    loginControlEnable();
    rgbTextInputdisable();
    pinBoxDisable();
    rgbBtnBtnDisable();
    wonTotalLossClear();
    historyRgbClear();
    loginBtnEnable();
    startBtnDisable();
    alert(`RGB is a minnning game for RGBcoin, log in your Card Number, your Pin Number and select a block then click login, click start to start the game. $10 is given for each game, make upto $15 or more then cashout in real Dollars or equivalent in fiat money. you can also use your generated RGBcoin to purchase goods and services on coin4naira.com, Join any of our official site to trade your RGBcoin Card.
        
    Powered by: Ensodev Technology`);
}