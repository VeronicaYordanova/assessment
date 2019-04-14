
function invalidEmail(email) {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value.match(emailRegex)) {
        document.getElementById('emailMsg').classList.remove('hidden'); 
        return true;             
    } else {
        document.getElementById('emailMsg').classList.add('hidden');  
    }

    return false;
}

function invalidUsername(username) {
    let userInput = username.value;
    if (!(userInput.length >= 4 && userInput.length <= 12)) {
        document.getElementById('userMsg').classList.remove('hidden'); 
        return true;
    } else {
        document.getElementById('userMsg').classList.add('hidden'); 
    }

    return false;
}

function invalidPassword(password, confirmPassword) {
    let passwordRegex = /^(?=.{6,12}$)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
    let result = false;
    if (!password.value.match(passwordRegex)) {
        document.getElementById('passMsg').classList.remove('hidden'); 
        result = true;
    } else {
        document.getElementById('passMsg').classList.add('hidden');
        result = false;
    }
    
    if ((password.value !== confirmPassword.value)) {
        document.getElementById('passConfirmMsg').classList.remove('hidden');
        result = true;
    } else {
        result = false;
        document.getElementById('passConfirmMsg').classList.add('hidden');
    }

    return result;
}

function formValidation(event) {
    event.preventDefault();
    let result = true;
    let email = document.getElementById('email');
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let termsAndConditions = document.getElementById('termsCheckbox');
   
    // if form is empty
    if (email.value.length == 0 || username.value.length == 0 || password.value.length == 0 || confirmPassword.value.length == 0 || termsAndConditions.checked == false) {
        document.getElementById('head').classList.remove('hidden');
        result = false 
    }

    if (invalidEmail(email)) {
        result = false;
    }

    if (invalidUsername(username)) {
        result = false;
    }

    if (invalidPassword(password, confirmPassword)) {
       result = false;
    } 

    if (result) {
        window.open('step_2.html', '_self')
    }

    return result;
}

function isChecked() {
 
    let checkBox = document.getElementById("checkbox");

    if (checkBox.checked == true){
        document.getElementById('bonus').classList.remove('hidden');
    } else {
        document.getElementById('bonus').classList.add('hidden');        
    }
}

function secondFormValidation() {
    event.preventDefault();
    let bonusCode = document.getElementById('bonusCode');
    let checkBox = document.getElementById("checkbox");

    if (checkBox.checked == true && bonusCode.value.length === 0) {
        document.getElementById('bonusMsg').classList.remove('hidden');
        return;
    } else {
        document.getElementById('bonusMsg').classList.add('hidden');
    }
    
    if ((checkBox.checked == true && bonusCode.value.length !== 0) || checkBox.checked == false) {
        window.open('step_4.html', '_self')
    } 
    
}

$(document).ready(function() {
    $('.form-container').css('visibility', 'visible');
    if ($(document).width() > 1024) {
        $('.form-container').css('top', '-1000px')
        
        $('.form-container').animate({
            top: '0px'
        }, 500);
    }

    if ($(document).width() >= 768 && $(document).width() <= 1024) {
        $('.form-container').css('left', '1000px')
        $('.form-container').animate({
            left: '0'
        }, 500);
    }    
})


