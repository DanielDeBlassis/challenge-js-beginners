// Desafío de programación #22: Invertir un array
// Ejemplo:
// [1,2,3,4] debería quedar como [4,3,2,1]
// [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
// [5,6,3] debería quedar como [3,6,5]

var array = [];

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function agregarNumero() {
    var numeroIntroducido = document.getElementById("input-numero");

    if (numeroIntroducido.value != "") {
        var numero = Number.parseInt(numeroIntroducido.value);
        array.push(numero);
    } else {
        alert("Error! Intente de nuevo.");
    }
}

function invertirArray() {
    if (array.length > 0) {
        var longitud = array.length;
        var newArr = [];
        for(let i = (longitud - 1); i >= 0; i--){
            newArr.push(array[i]);
        }
        resultado = `<p class="resultado">El array resultante es: ${JSON.stringify(newArr)}<p>`;
        contenedor.innerHTML = resultado;
    } else {
        alert("Error! Agregue un número por favor!");
    }
}