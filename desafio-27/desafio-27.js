// Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
// Ejemplo:
// [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]

var array = [];
var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function agregarArray() {
    var numeroIntroducido = document.getElementById("numero");

    if (numeroIntroducido.value != "") {
        var numero = Number.parseInt(numeroIntroducido.value);
        if (numero != NaN) { array.push(numero); }
    } else {
        alert("Error! Intente de nuevo.");
    }
}

function filtrarArray() {
    var newArray = [];
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            var contador = 0;

            if(!newArray.includes(array[i])){
                newArray.push(array[i]);
            }
        }
        resultado = `<p class="resultado">El Array resultante es: ${JSON.stringify(newArray)}<p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Ingrese valores a los arreglos. Vuelva a intentar.");
    }
}
