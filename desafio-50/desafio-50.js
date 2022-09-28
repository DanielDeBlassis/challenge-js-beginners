// Desafío de programación #50. Cree una función que reciba n como argumento y devuelva un arreglo de n números aleatorios únicos del 1 al n.

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function generarArreglo() {
    var numeroIngresado = document.getElementById("numero").value;

    if (numeroIngresado != "") {

        var numero = Number.parseInt(numeroIngresado);
        var array = [];
        var contador = 0;

        while(contador != numero){
            var nroAzar = Math.round(Math.random() *  (numero - 1) + 1);
            if(array.indexOf(nroAzar) === -1){
                array.push(nroAzar);
                contador++;
            }
        }

        resultado = `<p class="resultado">Resultado: ${JSON.stringify(array)}</p>`;
        contenedor.innerHTML = resultado;

    } else {
        alert("Error! Por favor introduzca los valores.");
    }
}