document.getElementById("playerOne").style.backgroundColor = "#eeeeee";
document.getElementById("playerTwo").style.backgroundColor = "#eeeeee";
document.getElementsByClassName("middleDot")[0].style.visibility = "hidden";
document.getElementsByClassName("middleDot")[1].style.visibility = "hidden";

function randomNumber(ranL, ranR) {
   ranL = Math.floor(Math.random() * 6 ) + 1;
   if (ranL === 1 ) {
       leftOne();
   } else if (ranL === 2) {
       leftTwo();
   } else if (ranL === 3) {
       leftThree();
   } else if (ranL === 4) {
       leftFour();
   } else if (ranL === 5) {
       leftFive();
   } else {
       leftSix();
   }

   ranR = Math.floor(Math.random() * 6 ) + 1;
   if (ranR === 1 ) {
        rightOne();
    } else if (ranR === 2) {
        rightTwo();
    } else if (ranR === 3) {
        rightThree();
    } else if (ranR === 4) {
        rightFour();
    } else if (ranR === 5) {
        rightFive();
    } else {
        rightSix();
    }


    replaceWinnerValue = document.getElementById("winner");
        if (ranL > ranR) {
            replaceWinnerValue.innerHTML = "Player 1 Win";
        } else if (ranR > ranL) {
            replaceWinnerValue.innerHTML = "Player 2 Win";
        } else {
            replaceWinnerValue.innerHTML = "Dice";
        }
    

} 



function leftOne(){
    document.getElementsByClassName("dot1")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot2")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot3")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot4")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot5")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot6")[0].style.visibility = "hidden";
    document.getElementsByClassName("middleDot")[0].style.visibility = "visible";
}

function leftTwo(){
    document.getElementsByClassName("dot1")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot2")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot3")[0].style.visibility = "visible";
    document.getElementsByClassName("dot4")[0].style.visibility = "visible";
    document.getElementsByClassName("dot5")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot6")[0].style.visibility = "hidden";
    document.getElementsByClassName("middleDot")[0].style.visibility = "hidden";
}

function leftThree(){
    document.getElementsByClassName("dot1")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot2")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot3")[0].style.visibility = "visible";
    document.getElementsByClassName("dot4")[0].style.visibility = "visible";
    document.getElementsByClassName("dot5")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot6")[0].style.visibility = "hidden";
    document.getElementsByClassName("middleDot")[0].style.visibility = "visible";
}

function leftFour(){
    document.getElementsByClassName("dot1")[0].style.visibility = "visible";
    document.getElementsByClassName("dot2")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot3")[0].style.visibility = "visible";
    document.getElementsByClassName("dot4")[0].style.visibility = "visible";
    document.getElementsByClassName("dot5")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot6")[0].style.visibility = "visible";
    document.getElementsByClassName("middleDot")[0].style.visibility = "hidden";
}

function leftFive(){
    document.getElementsByClassName("dot1")[0].style.visibility = "visible";
    document.getElementsByClassName("dot2")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot3")[0].style.visibility = "visible";
    document.getElementsByClassName("dot4")[0].style.visibility = "visible";
    document.getElementsByClassName("dot5")[0].style.visibility = "hidden";
    document.getElementsByClassName("dot6")[0].style.visibility = "visible";
    document.getElementsByClassName("middleDot")[0].style.visibility = "visible";
}

function leftSix(){
    document.getElementsByClassName("dot1")[0].style.visibility = "visible";
    document.getElementsByClassName("dot2")[0].style.visibility = "visible";
    document.getElementsByClassName("dot3")[0].style.visibility = "visible";
    document.getElementsByClassName("dot4")[0].style.visibility = "visible";
    document.getElementsByClassName("dot5")[0].style.visibility = "visible";
    document.getElementsByClassName("dot6")[0].style.visibility = "visible";
    document.getElementsByClassName("middleDot")[0].style.visibility = "hidden";
}

function rightOne(){
    document.getElementsByClassName("dot1")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot2")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot3")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot4")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot5")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot6")[1].style.visibility = "hidden";
    document.getElementsByClassName("middleDot")[1].style.visibility = "visible";
}

function rightTwo(){
    document.getElementsByClassName("dot1")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot2")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot3")[1].style.visibility = "visible";
    document.getElementsByClassName("dot4")[1].style.visibility = "visible";
    document.getElementsByClassName("dot5")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot6")[1].style.visibility = "hidden";
    document.getElementsByClassName("middleDot")[1].style.visibility = "hidden";
}

function rightThree(){
    document.getElementsByClassName("dot1")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot2")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot3")[1].style.visibility = "visible";
    document.getElementsByClassName("dot4")[1].style.visibility = "visible";
    document.getElementsByClassName("dot5")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot6")[1].style.visibility = "hidden";
    document.getElementsByClassName("middleDot")[1].style.visibility = "visible";
}

function rightFour(){
    document.getElementsByClassName("dot1")[1].style.visibility = "visible";
    document.getElementsByClassName("dot2")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot3")[1].style.visibility = "visible";
    document.getElementsByClassName("dot4")[1].style.visibility = "visible";
    document.getElementsByClassName("dot5")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot6")[1].style.visibility = "visible";
    document.getElementsByClassName("middleDot")[1].style.visibility = "hidden";
}

function rightFive(){
    document.getElementsByClassName("dot1")[1].style.visibility = "visible";
    document.getElementsByClassName("dot2")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot3")[1].style.visibility = "visible";
    document.getElementsByClassName("dot4")[1].style.visibility = "visible";
    document.getElementsByClassName("dot5")[1].style.visibility = "hidden";
    document.getElementsByClassName("dot6")[1].style.visibility = "visible";
    document.getElementsByClassName("middleDot")[1].style.visibility = "visible";
}

function rightSix(){
    document.getElementsByClassName("dot1")[1].style.visibility = "visible";
    document.getElementsByClassName("dot2")[1].style.visibility = "visible";
    document.getElementsByClassName("dot3")[1].style.visibility = "visible";
    document.getElementsByClassName("dot4")[1].style.visibility = "visible";
    document.getElementsByClassName("dot5")[1].style.visibility = "visible";
    document.getElementsByClassName("dot6")[1].style.visibility = "visible";
    document.getElementsByClassName("middleDot")[1].style.visibility = "hidden";
}

function whoWin(ranL, ranR) {
    if (ranL >! ranR) {
        document.getElementById("winner").innerHTML = "Player 1 Win";
    } else if (raL <! ranR) {
        document.getElementById("winner").innerHTML = "Player 2 Win";
    } else {
        document.getElementById("winner").innerHTML = "dice";
    }
}