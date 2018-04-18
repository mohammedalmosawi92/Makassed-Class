var name = localStorage.getItem("name");
if(name === null) {
    window.location.href = "index.html";
}

document.getElementById("name").innerHTML = name;

function logout() {
    localStorage.removeItem("name");
    window.location.href = "index.html";
}