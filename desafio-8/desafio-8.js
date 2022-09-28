// Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
// FÓRMULA: (0 °C × 9/5) + 32 = 32°F
var conversion = 0;

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;



function convertir() {
    var valorIngresado = document.getElementById("grados-celsius");
    
    if (valorIngresado.value != null && valorIngresado.value != "") {
        var gradosCelsius = Number.parseInt(valorIngresado.value);
        conversion = ((gradosCelsius * 9 / 5) + 32);
        resultado = `<p class="resultado">${gradosCelsius} °C es igual ${conversion} °F.<p>`;
        contenedor.innerHTML = resultado;
    } else {
        alert("Error! Vuelva a intentar.");
    }
}

