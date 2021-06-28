// Welcome MSG
var welcomeMSG = document.getElementById("welcomeMSG")

// Logout BTN
var logoutBtn = document.getElementById("logoutBtn")

var loginUser = JSON.parse(localStorage.getItem("loginUser"));
welcomeMSG.innerHTML = `<h1>Welcome ${loginUser.name}</h1>`

//Logout 
function logOut() {
    localStorage.removeItem("loginUser")
    logoutBtn.setAttribute('href', '../index.html')
}
logoutBtn.addEventListener('click', logOut)
