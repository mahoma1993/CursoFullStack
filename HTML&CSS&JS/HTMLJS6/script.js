var nameSpan = document.querySelector("#name");
var foodToOrder = "manzana";


function setname(element){
    console.log(element.value)
    nameSpan.innerText = element.value;
}

function pickfodd(element){
    console.log(element.value);
    foodToOrder = element.value;
}

function order(){
    
    alert ("vas a pedir "+ foodToOrder);
}


