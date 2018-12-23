// note this file must be review rewrite 
// the code in this file can be rewriten in a short for
// through the use of array

//assigning generated random stored in array to new variable each
function DisplayResults() {
    let rbg_result1 = GAMEResult[1];
    let rbg_result2 = GAMEResult[2];
    let rbg_result3 = GAMEResult[3];
    let rbg_result4 = GAMEResult[4];
    let rbg_result5 = GAMEResult[5];
    let rbg_result6 = GAMEResult[6];
    let rbg_result7 = GAMEResult[7];
    let rbg_result8 = GAMEResult[8];
    let rbg_result9 = GAMEResult[9];
    let rbg_result10 = GAMEResult[10];
    let rbg_result11 = GAMEResult[11];
    let rbg_result12 = GAMEResult[12];
    let rbg_result13 = GAMEResult[13];
    let rbg_result14 = GAMEResult[14];
    let rbg_result15 = GAMEResult[15];
    let rbg_result16 = GAMEResult[16];
    let rbg_result17 = GAMEResult[17];
    let rbg_result18 = GAMEResult[18];
    let rbg_result19 = GAMEResult[19];
    let rbg_result20 = GAMEResult[20];

    //assigning text predit stored in array to new variable each
    let rbg_txt_result1 = textValues[1];
    let rbg_txt_result2 = textValues[2];
    let rbg_txt_result3 = textValues[3];
    let rbg_txt_result4 = textValues[4];
    let rbg_txt_result5 = textValues[5];
    let rbg_txt_result6 = textValues[6];
    let rbg_txt_result7 = textValues[7];
    let rbg_txt_result8 = textValues[8];
    let rbg_txt_result9 = textValues[9];
    let rbg_txt_result10 = textValues[10];
    let rbg_txt_result11 = textValues[11];
    let rbg_txt_result12 = textValues[12];
    let rbg_txt_result13 = textValues[13];
    let rbg_txt_result14 = textValues[14];
    let rbg_txt_result15 = textValues[15];
    let rbg_txt_result16 = textValues[16];
    let rbg_txt_result17 = textValues[17];
    let rbg_txt_result18 = textValues[18];
    let rbg_txt_result19 = textValues[19];
    let rbg_txt_result20 = textValues[20];

    // this function compare result generated from text input and random generated from each button 
    if (rbg_result1 != rbg_txt_result1) {
        TotalLoss++;    //increase loss point if not equal
        //display the result
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB1").innerHTML = 0
    } else {
        TotalPoint++;   // increase point if equall
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB1").innerHTML = 1
    }


    if (rbg_result2 != rbg_txt_result2) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB2").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB2").innerHTML = 1

    }

    if (rbg_result3 != rbg_txt_result3) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB3").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB3").innerHTML = 1
    }

    if (rbg_result4 != rbg_txt_result4) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB4").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB4").innerHTML = 1
    }

    if (rbg_result5 != rbg_txt_result5) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB5").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB5").innerHTML = 1
    }

    if (rbg_result6 != rbg_txt_result6) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB6").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB6").innerHTML = 1
    }

    if (rbg_result7 != rbg_txt_result7) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB7").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB7").innerHTML = 1
    }

    if (rbg_result8 != rbg_txt_result8) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB8").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB8").innerHTML = 1
    }

    if (rbg_result9 != rbg_txt_result9) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB9").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB9").innerHTML = 1
    }

    if (rbg_result10 != rbg_txt_result10) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB10").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB10").innerHTML = 1
    }

    if (rbg_result11 != rbg_txt_result11) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB11").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB11").innerHTML = 1
    }

    if (rbg_result12 != rbg_txt_result12) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB12").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB12").innerHTML = 1
    }

    if (rbg_result13 != rbg_txt_result13) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB13").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB13").innerHTML = 1
    }

    if (rbg_result14 != rbg_txt_result14) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB14").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB14").innerHTML = 1
    }

    if (rbg_result15 != rbg_txt_result15) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB15").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB15").innerHTML = 1
    }

    if (rbg_result16 != rbg_txt_result16) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB16").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB16").innerHTML = 1
    }

    if (rbg_result17 != rbg_txt_result17) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB17").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB17").innerHTML = 1
    }

    if (rbg_result18 != rbg_txt_result18) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB18").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB18").innerHTML = 1
    }

    if (rbg_result19 != rbg_txt_result19) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB19").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB19").innerHTML = 1
    }

    if (rbg_result20 != rbg_txt_result20) {
        TotalLoss++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB20").innerHTML = 0
    } else {
        TotalPoint++;
        document.getElementById("won-win").innerHTML = TotalPoint;
        document.getElementById("won-loss").innerHTML = TotalLoss;
        document.getElementById("historyRGB20").innerHTML = 1
    }

    //run this to display the amount made in dollars
    displayDollar()
}