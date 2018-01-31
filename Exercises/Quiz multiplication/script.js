function calculateBtn() {
    var firstNum = document.getElementById("fnum").value;
    var secondNum = document.getElementById("lnum").value;
    var result = firstNum * secondNum;
    // 1- create new element ex: h1, div
    var h1 = document.createElement("h1");
    // 2- put fullName inside the new element
    h1.innerHTML = result;
    // 3- append the new element inside the div(id=displayName)
    document.getElementById("displayResult").appendChild(h1)
}