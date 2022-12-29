var cookiediv = document.querySelector(".body3");
var foodToOrder = "manzana";

function borrarcookie(){
    cookiediv.remove();
}

function loading(element){
    alert(element.innerText + "Cargando la temp");
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function cambiartemp(element){

    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}








