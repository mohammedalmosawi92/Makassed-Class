function submitBtn() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var fullName = firstName + " " + lastName;
    console.log(fullName);
    document.getElementById("displayName").innerHTML = fullName
}