var contador = 1; 

var contadorel= document.querySelector("#count")

console.log(contadorel)

function add1(){
    contador =contador +1;
    console.log(contador);
    contadorel.innerText = " The count is "+ contador;
}

function sub1(){
    contador =contador -1;
    console.log(contador);
    contadorel.innerText = " The count is "+ contador;
}