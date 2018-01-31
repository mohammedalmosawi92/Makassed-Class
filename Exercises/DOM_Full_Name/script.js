function submitBtn() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var fullName = firstName + " " + lastName;
    // 1- create new element ex: h1, div
    var h1 = document.createElement("h1");
    // 2- put fullName inside the new element
    h1.innerHTML = fullName;
    // 3- append the new element inside the div(id=displayName)
    document.getElementById("displayName").appendChild(h1)
}