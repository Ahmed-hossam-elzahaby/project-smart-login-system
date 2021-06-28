

               // Login Inputs and Login BTN
var userLoginEmail = document.getElementById("userLoginEmail")
var userLoginPassword = document.getElementById("userLoginPassword")
var loginBtn = document.getElementById("login")

// Login Error MSGs
var userLoginEmailError = document.getElementById("userLoginEmailError")
var userLoginPasswordError = document.getElementById("userLoginPasswordError")

var loginUser;

var allUsers;
if (localStorage.getItem('allUsers') == null) {
    allUsers = []
}
else {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}

// Login User
function login() {
    var emailvalid = handleUserLoginEmail()
    var passwordvalid = handleUserLoginPassowrd()
    if (emailvalid && passwordvalid) {
        localStorage.setItem('loginUser', JSON.stringify(loginUser))
        clearInputs()
        loginBtn.setAttribute('href', '../pages/welcome.html')
    }
}
loginBtn.addEventListener('click', login)
// loginBtn.onclick = function () {
//     login
// }


// Clear Inputs
function clearInputs() {
        userLoginEmail.value = ''
        userLoginPassword.value = ''
}

// Validate Login Inputs
function handleUserLoginEmail() {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var emailResult = false;
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == userLoginEmail.value.toLowerCase()) {
            emailResult = true
            loginUser = allUsers[i]
        }
    }
    if (userLoginEmail.value == '') {
        userLoginEmailError.innerHTML = 'Email Field is required'
        userLoginEmailError.style.display = 'block'
        return false
    }
    else if (!regex.test(userLoginEmail.value)) {
        userLoginEmailError.innerHTML = 'Invalid Email'
        userLoginEmailError.style.display = 'block'
        return false
    }
    else if (!emailResult) {
        userLoginEmailError.innerHTML = 'Email is not exists'
        userLoginEmailError.style.display = 'block'
        return false
    }
    else {
        userLoginEmailError.style.display = 'none'
        return true
    }
}
function handleUserLoginPassowrd() {
    // var regex = /^[a-zA-Z0-9]+/
    var passwordResult = false;
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].password == userLoginPassword.value) {
            passwordResult = true
        }
    }
    if (userLoginPassword.value == '') {
        userLoginPasswordError.innerHTML = 'Passowrd Field is required'
        userLoginPasswordError.style.display = 'block'
        return false
    }
    // else if (regex.test(userSignPassword.value)) {
    //     userSignPasswordError.innerHTML = 'Week Password'
    //     userSignPasswordError.style.display = 'block'
    //     return false
    // }
    else if (!passwordResult) {
        userLoginPasswordError.innerHTML = 'Wrong Password'
        userLoginPasswordError.style.display = 'block'
        return false
    }
    else {
        userLoginPasswordError.style.display = 'none'
        return true
    }
}
