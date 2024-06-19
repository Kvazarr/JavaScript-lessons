function formSubmitHandler(e) {
    e.preventDefault();
    
    clearErrorLable();

    const data = {
        fistName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value,
    };

    if(validateData(data)) {
        const form = document.forms["formSignup"];
        form.reset(); // очищення полів форми
        // form.sumbit(); // підтвердження форми
        console.log(data);
    } else {
        console.log("Not valid");
    }
}

function showErrorLable(text, size = "0.8em") {
    const labelError = document.getElementById("labelError");
    labelError.innerText = text;
    labelError.hidden = false;
    labelError.style["font-size"] = size;
}

function clearErrorLable() {
    const labelError = document.getElementById("labelError");
    labelError.innerText = "";
    labelError.hidden = true;
}

function validateData(data) {
    const regexEmail = /^[\w-\.]{3,}@[\w-]{2,}\.[\w-]{2,4}$/;
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if(data.email === "") {
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


function testForm(e) {
    const form = document.forms["searchForm"];
    form.reset();
    form.submit();

    return false;
}