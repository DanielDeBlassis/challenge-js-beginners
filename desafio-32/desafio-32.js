// Desafío de programación #32. Crear una función que capitalice la primera letra de cada palabra en un texto

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function capitalizarPalabras(){
    var textoIngresado = document.getElementById("texto");

    if(textoIngresado.value != ""){
        var texto = textoIngresado.value;
        var soloPalabras = texto.split(/ /);
        var newText = "";
        for(let i = 0; i < soloPalabras.length; i++){
            newText += capitalizar(soloPalabras[i]) + " ";
        }

        resultado = `<p class="resultado">Resultado: ${newText}<p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Ingrese texto.");
    }
}

function capitalizar(texto){
    var minuscula = texto.toLowerCase();
    return (minuscula.charAt(0).toUpperCase() + minuscula.slice(1));
}
