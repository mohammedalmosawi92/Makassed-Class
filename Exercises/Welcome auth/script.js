var username = "admin";
var password = "123";

localStorage.setItem("username", username);
localStorage.setItem("pwd", password);

function logIn() {
    var username = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
	var lSUsername = localStorage.getItem("username");
	var lSPassword = localStorage.getItem("pwd");
	
    localStorage.setItem("name", username);
	if(lSUsername === username && lSPassword === password) {
		window.location.href = "welcome.html";
	}else {
		alert("Username or password is incorrect")
	}
}

