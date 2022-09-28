// Desafío de programación #31-a. Crear una función que devuelva el número de palabras en un texto.

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function contarPalabras(){
    var textoIngresado = document.getElementById("texto");
    if(textoIngresado.value != ""){
        var texto = textoIngresado.value;
        var soloPalabras = texto.split(/ /);

        resultado = `<p class="resultado">La cadena está compuesta por ${soloPalabras.length} palabras.<p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Ingrese texto.");
    }
}