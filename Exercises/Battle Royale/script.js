document.getElementById("resetGame").style.visibility = "hidden";
function ryuHit() {
    var kenHealth = document.getElementById("kenHealth").value
    var kenNewHealth = kenHealth - 1;
    document.getElementById("kenHealth").value = kenNewHealth;
    if (kenNewHealth == 0) {
        document.getElementById("result").innerHTML = "Ryu won the fight";
        document.getElementById("ryuHitBtn").disabled = true
        document.getElementById("kenHitBtn").disabled = true
        document.getElementById("resetGame").style.visibility = "visible";
    }
}

function kenHit() {
    var ryuHealth = document.getElementById("ryuHealth").value;
    var ryuNewHealth = ryuHealth - 1;
    document.getElementById("ryuHealth").value = ryuNewHealth;
    if (ryuNewHealth == 0) {
        document.getElementById("result").innerHTML = "Ken won the fight"
        document.getElementById("ryuHitBtn").disabled = true
        document.getElementById("kenHitBtn").disabled = true
        document.getElementById("resetGame").style.visibility = "visible";
    }
}

function resetGame() {
    document.getElementById("ryuHealth").value = 10;
    document.getElementById("kenHealth").value = 10;
    document.getElementById("ryuHitBtn").disabled = false;
    document.getElementById("kenHitBtn").disabled = false;
    document.getElementById("result").innerHTML = "";
    document.getElementById("resetGame").style.visibility = "hidden";
}
