// hide the division for the reset game option
//document.getElementById("resetGame").style.visibility = "hidden";

var gameInfo = JSON.parse(localStorage.getItem("game"));
console.log(gameInfo);
var p1KeyUpper = gameInfo.p1key.charCodeAt(0);
var p1KeyLower = gameInfo.p1key.toLowerCase().charCodeAt(0);
var p2KeyUpper = gameInfo.p2key.charCodeAt(0);
var p2KeyLower = gameInfo.p2key.toLowerCase().charCodeAt(0);
var gameOver = false;

document.getElementById("player1Name").innerHTML = gameInfo.player1;
document.getElementById("player2Name").innerHTML = gameInfo.player2;
document.getElementById("player1Health").value = gameInfo.health;
document.getElementById("player2Health").value = gameInfo.health;
document.getElementById("player1Btn").innerHTML = "Press " + gameInfo.p1key;

document.getElementById("player2Btn").innerHTML = "Press " + gameInfo.p2key;
function player1Hit() {
    var player2Health = document.getElementById("player2Health").value
    var player2NewHealth = player2Health - 1;
    document.getElementById("player2Health").value = player2NewHealth;
    if (player2NewHealth == 0) {
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Game Over " + "<br>" + gameInfo.player1 + " won the fight";
        resultDiv.setAttribute("class", "result-p1-won");
        document.getElementById("player1Btn").disabled = true
        document.getElementById("player2Btn").disabled = true
        gameOver = true
    }
}

function player2Hit() {
    var player1Health = document.getElementById("player1Health").value;
    var player2NewHealth = player1Health - 1;
    document.getElementById("player1Health").value = player2NewHealth;
    if (player2NewHealth == 0) {
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Game Over " + "<br>" + gameInfo.player2 + " won the fight";
        resultDiv.setAttribute("class", "result-p2-won");
        document.getElementById("player1Btn").disabled = true
        document.getElementById("player2Btn").disabled = true
        gameOver = true
    }
}

function resetGame() {
    document.getElementById("player1Health").value = gameInfo.health;
    document.getElementById("player2Health").value = gameInfo.health;
    document.getElementById("player1Btn").disabled = false
    document.getElementById("player2Btn").disabled = false
    document.getElementById("result").innerHTML = "";
    gameOver = false
}

document.onkeypress = function (e) {
    var code = e.charCode;
    console.log(gameOver);
    if (code === p1KeyLower && !gameOver || code === p1KeyUpper && !gameOver) {
        player1Hit();
    }
    
    if (code === p2KeyLower && !gameOver || code === p2KeyUpper && !gameOver) {
        player2Hit();
    }
    

}
