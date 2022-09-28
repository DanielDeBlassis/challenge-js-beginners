// Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
// Nota: Esto se llama "diferencia simétrica" entre conjuntos
// Ejemplo:
//   [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
//   [5,10,3] y [10,1] debería quedar como [5,3,1]

var arrayUno = [];
var arrayDos = [];

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function agregarArrayUno() {
    var numeroIntroducido = document.getElementById("numero");

    if (numeroIntroducido.value != "") {
        var numero = Number.parseInt(numeroIntroducido.value);
        if (numero != NaN) { arrayUno.push(numero); }
    } else {
        alert("Error! Intente de nuevo.");
    }
}

function agregarArrayDos() {
    var numeroIntroducido = document.getElementById("numero");

    if (numeroIntroducido.value != "") {
        var numero = Number.parseInt(numeroIntroducido.value);
        if (numero != NaN) { arrayDos.push(numero); }
    } else {
        alert("Error! Intente de nuevo.");
    }
}

function filtrarArrays() {
    var newArray = [];
    if (arrayUno.length > 0 || arrayDos.length > 0) {
        for (let i = 0; i < arrayUno.length; i++) {
            if (!arrayDos.includes(arrayUno[i])) {
                newArray.push(arrayUno[i]);
            }
        }
        for (let i = 0; i < arrayDos.length; i++) {
            if (!arrayUno.includes(arrayDos[i])) {
                newArray.push(arrayDos[i]);
            }
        }
        resultado = `<p class="resultado">El Array resultante es: ${JSON.stringify(newArray)}<p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Ingrese valores a los arreglos. Vuelva a intentar.");
    }
}
