const json = `{
    "login":"user",
    "password":"qwerty",
    "age":50,
    "address":
    [
        {"country":"Ukraine", "city":"Rivne"},
        {"country":"USA", "city":"Boston"},
        {"country":"Poland", "city":"Warsava"}
    ]
}`;


const showHandler = () => { 
    const logpass = document.getElementById("logpass");
    const age = document.getElementById("age");
    const addressDiv = document.getElementById("adress");

    const userData = JSON.parse(json)

    logpass.innerText = `Login: ${userData.login}, Password: ${userData.password}`;
    age.innerText = `Age: ${userData.age}`;

    for (let i = 0; i < userData.address.length; i++) {
        const data = userData.address[i];
        const item = `Country: ${data.country}, City: ${data.city}`;

        const div = document.createElement("div");
        div.innerText = item;
        addressDiv.appendChild(div);
    }
}