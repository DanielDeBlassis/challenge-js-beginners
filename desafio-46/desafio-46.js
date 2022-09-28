// Desafío de programación #46. Encuentre el número máximo en una matriz irregular de números o matriz de números

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function buscarMaximo() {
    var matrizIngresada = document.getElementById("texto").value;

    if (matrizIngresada != "") {

        var arrayTexto = matrizIngresada.split(/\W/);
        var arrayNumeros = [];

        for (let i = 0; i < arrayTexto.length; i++) {
            if (arrayTexto[i] != "") {
                arrayNumeros.push(Number.parseInt(arrayTexto[i]));
            }
        }

        var nroMaximo = Math.max(...arrayNumeros);

        resultado = `<p class="resultado">Resultado: ${nroMaximo}</p>`;
        contenedor.innerHTML = resultado;

    } else {
        alert("Error! Por favor introduzca los valores.");
    }
}