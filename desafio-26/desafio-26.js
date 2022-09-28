// Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
// Nota; Esto se llama "resta" entre conjuntos
// Ejemplo:
//   [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

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
        resultado = `<p class="resultado">El Array resultante es: ${JSON.stringify(newArray)}<p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Ingrese valores a los arreglos. Vuelva a intentar.");
    }
}
