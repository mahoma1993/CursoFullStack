var animalimg = document.querySelector("#animal");

var titulo = document.querySelector("h1");

console.log(animalimg);

function elijogato(element){
    var perro = document.getElementById('perro');
    perro.classList.remove("btn");
    element.classList.add("btn");
    titulo.innerText = "El animal favorito es un gato";
    animalimg.src = "gato.png";
    console.log("elijogato");

}

function elijoperro(element){
    var gato = document.getElementById('gato');
    gato.classList.remove("btn");
    element.classList.add("btn");
    titulo.innerText = "El animal favorito es un perro";
    animalimg.src = "perro.png";
    console.log(element.classList);
    
}