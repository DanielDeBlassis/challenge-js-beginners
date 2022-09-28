// Desafío de programación #3: Imprimí la tabla de multiplicación del 7
//  7x0 = 0
//  7x1 = 7
//  ...
//  7x9 = 63

var contenedor = document.getElementById("contenedor-resultado");
// contenedor.append("HOLA");
var resultado = ``;

for (let i = 1; i <= 10; i++) {
    resultado += `<p class="nro-resultado">7 X ${i} = ${7 * i}<p>`;
}

contenedor.innerHTML = resultado;
