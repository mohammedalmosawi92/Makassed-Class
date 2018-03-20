var fullName = localStorage.getItem("fullName");
if(fullName === null) {
    window.location.href = "index.html";
}

console.log(fullName)
document.getElementById("fullName").innerHTML = fullName;

function logout() {
    localStorage.removeItem("fullName");
    window.location.href = "index.html";
}