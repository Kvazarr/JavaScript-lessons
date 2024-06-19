const apiUrl = "https://swapi.dev/api/people";

// Підтримка internet explorer
// if(window.XMLHttpRequest) {
//     const request = new XMLHttpRequest();
// }
// else {
//     // for IE
//     const request = new ActiveXObject("Microsoft.XMLHTTP");
// }

function dataToHtml(data) {
    const list = document.getElementById("list");

    for (let i = 0; i < data.length; i++) {
        const li = document.createElement("li");
        li.innerText = `${data[i].name}; Height: ${data[i].height}; Eye: ${data[i].eye_color}`;
        list.appendChild(li);
    }
}

const getSwapiData = () => {
    const request = new XMLHttpRequest(); // об'єкт для роботи з HTTP запитами

    request.open("GET", apiUrl);

    request.onreadystatechange = () => {
        try {
            if (request.readyState === 4 && request.status === 200) {
                console.log("status ", request.status); // http response status code
                
                const jsonResponse = request.response; // json
                //const response = request.responseXML; // xml
                
                const obj = JSON.parse(jsonResponse);

                console.log(obj);

                dataToHtml(obj.results);
            } else {
                console.log("request was not ok");
            }
        } catch (error) {
            console.log("request exception ", error);
        }
    };

    request.send();
};

function showImgFilms(films) {
    const div = document.getElementById("films");

    for (let i = 0; i < films.length; i++) {
        const img = document.createElement("img");
        img.setAttribute("src", films[i].Poster);
        img.style["width"] = "100px";

        div.appendChild(img);
    }
}


function searchFilms(title) {
    const ombdapi = `https://www.omdbapi.com/?apikey=6126fcdb&s=${title}`;

    const request = new XMLHttpRequest(); // об'єкт для роботи з HTTP запитами

    request.open("GET", ombdapi);

    request.onload = () => { // спрацює коли відповідь повністю завантажиться
        if(request.status === 200) {
            const films = JSON.parse(request.response);
            console.log(films);

            showImgFilms(films.Search);
        }
    };

    request.send();
}


