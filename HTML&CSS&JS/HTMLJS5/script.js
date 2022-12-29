var contadorlikes=0;

function aumentarlikes(){
    contadorlikes=contadorlikes+1;
    var likesTexto = document.getElementById('likes');
    likesTexto.innerText = contadorlikes+"likes"
}

