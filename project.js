const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const   cardBody = document.querySelectorAll(".card-body")[1];
// console.log(titleElement)

const ui = new UI();//UI baslatma;

//Storage Objesi uretme

const storage = new Storage();
console.log(cardBody)

EventListener();

function EventListener() {
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    
    cardBody.addEventListener("click",deleteFilm);
}
function addFilm(e) {

        const title = titleElement.value;
        const url = urlElement.value;
        const director = directorElement.value;

    if (title === "" || director ==="" || url === ""){
        console.log("hata");
        ui.displayMessages("Tum alanlari doldurun","danger");
    }
    else {
        //yeni film
        console.log("Success");
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm);//arayuze film ekleme;
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("basariyla eklendi","success");


    }
    // titleElement.value = "";
    // directorElement.value = "";
    // urlElement.value = "";


    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e) {
    // console.log(e.target);
    if (e.target.id === "delete-film"){
            ui.deleteFilmFromUI(e.target);
    }
}


