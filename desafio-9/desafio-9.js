// Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
// FÓRMULA: (32 °F − 32) × 5/9 = 0 °C

var conversion = 0;

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function convertir() {
    var valorIngresado = document.getElementById("grados-farenheit");
    
    if (valorIngresado.value != null && valorIngresado.value != "") {
        var gradosFarenheit = Number.parseInt(valorIngresado.value);
        conversion = ((gradosFarenheit - 32) * 5 / 9);
        resultado = `<p class="resultado">${gradosFarenheit} °F es igual ${conversion} °C.<p>`;
        contenedor.innerHTML = resultado;
    } else {
        alert("Error! Vuelva a intentar.");
    }
}

