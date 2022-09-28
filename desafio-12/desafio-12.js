// Desafío de programación #12: Crea una función que reciba un array de números 
// y devuelva un array conteniendo solo los números positivos.

var array = [];
var suma = 0;

var contenedor = document.getElementById("contenedor-resultado");
// contenedor.append("HOLA");
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

function filtrarArray(){
    var newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] >= 0){
            newArr.push(array[i]);
        }
    }
    resultado = `<p class="resultado">El array filtrado, sin negativos, es igual a: ${JSON.stringify(newArr)}<p>`;
    contenedor.innerHTML = resultado;
}