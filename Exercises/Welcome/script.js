function logIn() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var fullName = firstName + " " + lastName;
    localStorage.setItem("fullName", fullName);
    window.location.href = "welcome.html";
}