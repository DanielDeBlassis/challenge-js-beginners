// Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
// Ejemplo:
// Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

var contenedor = document.getElementById("contenedor-resultado");
// contenedor.append("HOLA");
var resultado = ``;

function buscarPrimos() {
    var nroInicioIngresado = document.getElementById("numero");
    var cantidadIngresada = document.getElementById("cantidad");

    if (nroInicioIngresado.value != "" && cantidadIngresada.value != "") {
        var inicio = Number.parseInt(nroInicioIngresado.value);
        var cantidad = Number.parseInt(cantidadIngresada.value);

        resultado += `<h1 class="nro-resultado">Primeros ${cantidad} números primos iniciando en ${inicio}<h1>`;

        var cuenta = inicio;
        var coincidencias = 0;

        while (coincidencias != cantidad) {
            cuenta++;
            var divisores = 0;
            for (let i = 1; i <= cuenta; i++) {
                if (cuenta % i === 0) {
                    divisores++;
                }
            }

            if (divisores === 2) {
                coincidencias++;
                resultado += `<p class="nro-resultado">${cuenta}<p>`;
            }

        }

        contenedor.innerHTML = resultado;

    }else{
        alert("Error! Vuelve a intentar.");
    }
}

