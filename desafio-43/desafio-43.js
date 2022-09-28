// Desafío de programación 43. Crear una función que reciba como argumento un arreglo bidimensional y un número y extraiga como arreglo unidimensional la columna especificada por el número

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function extraerColumna() {
    var arrayIngresado = document.getElementById("array").value;
    var nroColumnaIngresado = document.getElementById("columna").value;

    if (arrayIngresado != "" && nroColumnaIngresado != "") {
        var array = JSON.parse(arrayIngresado);
        var columna = Number.parseInt(nroColumnaIngresado);

        var datoExtraido = array.slice(columna, columna + 1);

        resultado = `<p class="resultado">Resultado: ${JSON.stringify(datoExtraido)}</p>`;
        contenedor.innerHTML = resultado;

    } else {
        alert("Error! Por favor introduzca los valores.");
    }
}