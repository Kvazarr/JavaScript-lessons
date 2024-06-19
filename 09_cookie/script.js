function getCookie() {
    const cookie = document.cookie;
    const obj = {};
    const values = cookie.split("; ");
    
    for (let i = 0; i < values.length; i++) {
        const item = values[i].split("=");
        obj[item[0]] = item[1];
    }

    return obj;
}

function loadHandler() {
    
    const cookie = getCookie();

    console.log(cookie);

    if("email" in cookie && "password" in cookie) {
        const email = document.getElementById("email");
        const password = document.getElementById("password");
    
        email.innerText = cookie.email;
        password.innerText = cookie.password;
    } else {
        document.location.href = "/login";
    }   
    
}

function removeCookie(name) {
    document.cookie = `${name}=""; expires=${new Date(0)}`;
}

function logout() {

    removeCookie("email");
    removeCookie("password");

    document.location.href = "/login";
}