// to set the defualt value for the game
var gameInfo = {
    player1: "Player1",
    player2: "Player2",
    health: 10,
    p1key: "A",
    p2key: "L"
}

if (!localStorage.game) {
    localStorage.setItem("game", JSON.stringify(gameInfo));
}

// select playe 1 and 2 select element
var p1Select = document.getElementById("p1-slt");
var p2Select = document.getElementById("p2-slt");
// call the setPlayersOptions function for each player
setPlayersOptions(p1Select,1);
setPlayersOptions(p2Select,2);

// to append(add) option element to the select element of the two players
function setPlayersOptions(slt,player) {
    var keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(var i = 0; i < keys.length; i++) {
        var optionElm = document.createElement("option");
        optionElm.setAttribute("value", keys[i]);
        optionElm.innerHTML = keys[i];
        slt.appendChild(optionElm);
    }
    // to select the 11th element in for player2 so both players don't have the same key selected by default
    if(player === 2) {
        slt.options.selectedIndex = 11;
    }
}

// to show an error message incase the two players had the same key
var errorMsg = document.getElementById("error-msg");
errorMsg.style.visibility = "hidden";

// to select the values inside the input and then save them in local storage
function start() {
    // get values
    var p1Name = document.getElementById("player1Name").value;
    var p2Name = document.getElementById("player2Name").value;
    var health = document.getElementById("health").value;
    var p1Key = p1Select.options[p1Select.options.selectedIndex].value;
    var p2Key = p2Select.options[p2Select.options.selectedIndex].value;
    // store the values inside an object
    var updateGameInfo = {
        player1: p1Name,
        player2: p2Name,
        health: health,
        p1key: p1Key,
        p2key: p2Key
    }
    // check whether the two players have the same key
    if(p1Key === p2Key) {
        errorMsg.style.visibility = "visible";
    }else {
        // store the object in local storage
        localStorage.setItem("game", JSON.stringify(updateGameInfo));
        errorMsg.style.visibility = "hidden";
        // jump to the game page
        location.href = "game.html";
    }
}
