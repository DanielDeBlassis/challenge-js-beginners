// Desafío de programación #24: Crear una función que reciba dos arrays (arreglos) como argumentos y retorne el resultado en un nuevo arreglo
// Ejemplo:
// [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]

var arrayUno = [];
var arrayDos = [];

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function agregarArrayUno() {
    var numeroIntroducido = document.getElementById("numero");
    var textoIntroducido = document.getElementById("texto");

    if (numeroIntroducido.value != "" || textoIntroducido.value != "") {
        var numero = Number.parseInt(numeroIntroducido.value);
        var texto = textoIntroducido.value;
        if (numero != NaN) { arrayUno.push(numero); }
        if (texto != "") { arrayUno.push(texto); }
    } else {
        alert("Error! Intente de nuevo.");
    }
}

function agregarArrayDos() {
    var numeroIntroducido = document.getElementById("numero");
    var textoIntroducido = document.getElementById("texto");

    if (numeroIntroducido.value != "" || textoIntroducido.value != "") {
        var numero = Number.parseInt(numeroIntroducido.value);
        var texto = textoIntroducido.value;
        if (numero != NaN) { arrayDos.push(numero); }
        if (texto != "") { arrayDos.push(texto); }
    } else {
        alert("Error! Intente de nuevo.");
    }
}


function concatenarArrays() {
    if (arrayUno.length > 0 || arrayDos.length > 0) {
        var newArr = arrayUno.concat(arrayDos);
        resultado = `<p class="resultado">El Array resultante es: ${JSON.stringify(newArr)}<p>`;
        contenedor.innerHTML = resultado;
    } else {
        alert("Error! Ingrese valores a los arrays. Vuelva a intentar.");
    }
}
