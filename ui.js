function UI() {
    
}
UI.prototype.addFilmToUI = function (newFilm) {
    // console.log(newFilm);

    const filmList = document.getElementById("films");
    filmList.innerHTML += `
<tr>
<td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
<td>${newFilm.title}</td>
<td>${newFilm.director}</td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr> 
    `};


UI.prototype.clearInputs = function (el1,el2,el3) {
    el1.value = "";
    el2.value = "";
    el3.value = "";
};

UI.prototype.displayMessages = function (message,type) {
    const cardBody = document.querySelector(".card-body");
                //    Alert divini Yaratmaq
    const div = document.createElement("div");
    div.className =  `aler alert-${type}`;
    div.textContent = message;
    div.style.padding = "10px 10px";
    div.style.width = "440px";
    div.style.margin = "10px 0px";
    div.style.textAlign = "center";
    div.style.fontSize = "25px";
    div.style.color = "black";
    // div.style.backgroundColor = "#DC3545";
    div.style.borderRadius = "14px";

    cardBody.appendChild(div);

    setTimeout(function () {
        div.remove();
    },1200)

};

UI.prototype.loadAllFilms = function (films) {
    const filmList = document.getElementById("films");
    films.forEach(function (film) {
        filmList.innerHTML += `
 <tr>
<td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
<td>${film.title}</td>
<td>${film.director}</td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>
`
    })
};

UI.prototype.deleteFilmFromUI = function (element) {
    element.parentElement.parentElement.remove();
}












