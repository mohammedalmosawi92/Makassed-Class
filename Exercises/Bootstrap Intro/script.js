function sub() {
    var f = document.getElementById("fname").value;
    console.log(f);
    localStorage.setItem("firstname",f);
    window.location.href = "home.html"
}