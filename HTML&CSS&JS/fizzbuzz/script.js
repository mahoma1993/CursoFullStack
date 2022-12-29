var numero = 0 ;
var nameSpan = document.querySelector("#resultado");
var numSpan = document.querySelector("#numero");
var resultado="";

/*for (i=0 ; i<16 ; i++){
    if (i % 3 && i% 5 == 0){
        console.log("fizbuzz");
    }else if (i%3==0){
        console.log("fizz");
    }else if (i%5==0){
        console.log("buzz")
    }
}*/

function imprimir(){
    i=ingresoNumero.value;
    i= parseInt (ingresoNumero.value);
    console.log(i);
    if (i%3==0 && i% 5 == 0){
        console.log("fizbuzz");
        resultado="fizbuzz";
    }else if (i%3==0){
        console.log("fizz");
        resultado="fizz";
    }else if (i%5==0){
        console.log("buzz")
        resultado="buzz";
    }
    nameSpan.innerText=resultado;
    numSpan.innerText=i;
    
}
