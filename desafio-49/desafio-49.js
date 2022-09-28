// Desafío de programación #49. Mezclar un arreglo de cadenas de texto

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function desordenarArreglo() {
    var arrayIngresado = document.getElementById("texto").value;

    if (arrayIngresado != "") {

        var arrayBruto = arrayIngresado.split(/\W/);
        var array = [];

        for (let i = 0; i < arrayBruto.length; i++) {
            if (arrayBruto[i] != "") {
                array.push(arrayBruto[i]);
            }
        }

        var longitud = array.length;
        // var nroAzar = Math.round(Math.random() *  (longitud - 1));
        var posicionesOcupadas = [];
        var arrayResultado = [];
        var contador = 0;
        var indice = 0;

        while (contador != longitud) {
            var nroAzar = Math.round(Math.random() * (longitud - 1));

            if (posicionesOcupadas.indexOf(nroAzar) === -1) {
                arrayResultado[nroAzar] = array[indice];
                posicionesOcupadas.push(nroAzar);
                contador++;
                indice++;
            }
        }

        resultado = `<p class="resultado">Resultado: ${JSON.stringify(arrayResultado)}</p>`;
        contenedor.innerHTML = resultado;

    } else {
        alert("Error! Por favor introduzca los valores.");
    }
}