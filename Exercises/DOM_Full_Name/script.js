var displayName = document.getElementById("displayName");
function submitBtn() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var fullName = firstName + " " + lastName;
    //1- create new element ex: h1, div, p using createElement("")
    var header = document.createElement("h1");
    //2- put fullName inside the new element using innerHTML
    header.innerHTML = fullName;
    //3- append the the new element inside the displayName using appendChild()
    displayName.appendChild(header);
}