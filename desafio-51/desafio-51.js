// Desafío de programación #50. Cree una función que reciba n como argumento y devuelva un arreglo de n números aleatorios únicos del 1 al n.

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function contarOcurrencias() {
    var textoIngresado = document.getElementById("texto").value;

    if (textoIngresado != "") {
        var texto = textoIngresado;

        var resumen = [];

        var abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        for (let i = 0; i < abecedario.length; i++) {
            let letra = abecedario[i];
            var expresion = new RegExp("(" + letra + ")", "gi");
            let coincidencias = texto.match(expresion);

            if(coincidencias != null){
                resumen.push(JSON.parse(`{"caracter": "${abecedario[i]}", "ocurrencias": ${coincidencias.length}}`));
            }
        }

        resultado = `<p class="resultado">Resultado: ${JSON.stringify(resumen)}</p>`;
        contenedor.innerHTML = resultado;

    } else {
        alert("Error! Por favor introduzca los valores.");
    }
}