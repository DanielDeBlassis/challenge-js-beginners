// Desafío de programación #45. Cree una función para calcular la suma de todos los números en una matriz irregular (la matriz contiene números u otras matrices de números en un número ilimitado de niveles)

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function sumarNumeros() {
    var matrizIngresada = document.getElementById("texto").value;

    if (matrizIngresada != "") {

       var arrayTexto = matrizIngresada.split(/\W/);

       var suma = 0;

       for(let i = 0; i < arrayTexto.length; i++){
        if(arrayTexto[i] != ""){
            suma += Number.parseInt(arrayTexto[i]);
        }
       }


        resultado = `<p class="resultado">Resultado: ${suma}</p>`;
        contenedor.innerHTML = resultado;

    } else {
        alert("Error! Por favor introduzca los valores.");
    }
}