// Desafío de programación #44. Cree una función que convierta una cadena que contenga un número binario en un número

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function convertirBinario() {
    var numeroIngresado = document.getElementById("texto").value;

    if (numeroIngresado != "") {

        var arrayCaracteres = numeroIngresado.split("");
        var numeroAlReves = arrayCaracteres.reverse();

        //Convirtiendo texto a número
        var arrayDigitos = [];

        for (let i = 0; i < numeroAlReves.length; i++) {
            arrayDigitos.push(Number.parseInt(numeroAlReves[i]));
        }

        //Calculando número decimal
        var suma = 0;

        for (let i = 0; i < arrayDigitos.length; i++) {
            suma += (arrayDigitos[i] * (Math.pow(2, i)));
        }

        resultado = `<p class="resultado">Resultado: ${suma}</p>`;
        contenedor.innerHTML = resultado;

    } else {
        alert("Error! Por favor introduzca los valores.");
    }
}