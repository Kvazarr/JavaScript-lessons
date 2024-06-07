function formSubmitHandler(e)
{
    e.preventDefault();

    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value
    };

    if(validateData(data)) {
        const form = document.forms["formSignup"];
        form.reset(); 
        console.log(data);
    } else {
        console.log("Not valid");
    }
    
}


function validateData(data) {
    const regexEmail = /^[\w-\.]{3,}@[\w-]{2,}\.[\w-]{2,4}$/;
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if(data.email == "") {
        showErrorLable("Пошта обов'язкова");
        return false;
    }

    if(!regexEmail.test(data.email)) {
        showErrorLable("Некоректний формат пошти");
        return false;
    }

    if(data.password.length < 6) {
        showErrorLable("Мінімальна довжина паролю 6 символів");
        return false;
    }

    if(!regexPassword.test(data.password)) {
        showErrorLable("Пароль повинен містити мінімум цифру, велику літеру та спец символ", "0.5em");
        return false;
    }

    if(data.password != data.confirmPassword) {
        showErrorLable("Паролі повинні збігатися");
        return false;
    }

    return true;
}