var fullName = localStorage.getItem("name");

if(fullName === null) {
    window.location.href = "index.html";
}

document.getElementById("greeting").innerHTML = fullName;

setTimeout(function() {
    window.location.href = "home.html";
}, 3000)