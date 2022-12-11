function display_name(element_name){
    console.log(element_name)
}

function ejemplo(elemento) {
    console.log("elemento clickeado", elemento);
}

function turnOffoOn(element) {
    if (element.innerText=="on"){

        element.innerText = "off";
} else {
    element.innerText = "on";
}

}