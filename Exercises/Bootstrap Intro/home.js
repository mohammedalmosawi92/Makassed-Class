var firstname = localStorage.getItem("firstname");
if(firstname === null) {
    window.location.href = "index.html"
}
document.getElementById("fname").innerHTML = firstname;