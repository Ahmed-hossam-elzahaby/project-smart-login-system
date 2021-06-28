// Sign Up Inputs and Sign Up BTN
var userName = document.getElementById("userName")
var userSignEmail = document.getElementById("userSignEmail")
var userSignPassword = document.getElementById("userSignPassword")
var signUpBtn = document.getElementById("signUp")

// Sing Up Error MSGs
var userNameError = document.getElementById("userNameError")
var userSignEmailError = document.getElementById("userSignEmailError")
var userSignPasswordError = document.getElementById("userSignPasswordError")

var allUsers;
if (localStorage.getItem('allUsers') == null) {
    allUsers = []
}
else {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}

// Sing Up New User
function singUp() {
    var namevalid = handleUserName()
    var emailvalid = handleUserSignEmail()
    var passwordvalid = handleUserSignPassowrd()
    if (namevalid && emailvalid && passwordvalid) {
        var newUser = {
            name: userName.value,
            email: userSignEmail.value.toLowerCase(),
            password: userSignPassword.value
        }
        allUsers.push(newUser)
        localStorage.setItem("allUsers", JSON.stringify(allUsers))
        clearInputs()
        signUpBtn.setAttribute('href', '../index.html')
    }
}
signUpBtn.addEventListener('click', singUp)
// signUpBtn.onclick = function () {
//     singUp
// }

// Clear Inputs
function clearInputs() {
    userName.value = ''
    userSignEmail.value = ''
    userSignPassword.value = ''
}

// Validation Sign Up Inputs
function handleUserName() {
    var regex = /^[a-zA-Z ]+$/
    if (userName.value == '') {
        userNameError.innerHTML = 'Name Field is required'
        userNameError.style.display = 'block'
        return false
    }
    else if (!regex.test(userName.value)) {
        userNameError.innerHTML = 'Invalid Name, must be only characters'
        userNameError.style.display = 'block'
        return false
    }
    else {
        userNameError.style.display = 'none'
        return true
    }
}
function handleUserSignEmail() {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var emailResult = false;
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == userSignEmail.value.toLowerCase()) {
            emailResult = true
        }
    }
    if (userSignEmail.value == '') {
        userSignEmailError.innerHTML = 'Email Field is required'
        userSignEmailError.style.display = 'block'
        return false
    }
    else if (!regex.test(userSignEmail.value)) {
        userSignEmailError.innerHTML = 'Invalid Email'
        userSignEmailError.style.display = 'block'
        return false
    }
    else if (emailResult) {
        userSignEmailError.innerHTML = 'Email is already exists'
        userSignEmailError.style.display = 'block'
        return false
    }
    else {
        userSignEmailError.style.display = 'none'
        return true
    }
}
function handleUserSignPassowrd() {
    // var regex = /^[a-zA-Z0-9]+/
    if (userSignPassword.value == '') {
        userSignPasswordError.innerHTML = 'Passowrd Field is required'
        userSignPasswordError.style.display = 'block'
        return false
    }
    // else if (regex.test(userSignPassword.value)) {
    //     userSignPasswordError.innerHTML = 'Week Password'
    //     userSignPasswordError.style.display = 'block'
    //     return false
    // }
    else {
        userSignPasswordError.style.display = 'none'
        return true
    }
}