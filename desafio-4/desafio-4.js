// Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
//  1x0 = 0
//  ...
//  1x9 = 9
//  2x0 = 0
//  ...
//  2x9 = 18
//  ...
//  ...
//  9x9 = 81

var contenedor = document.getElementById("contenedor-resultado");
// contenedor.append("HOLA");
var resultado = ``;

for (let i = 1; i <= 9; i++) {
    for(let j = 1; j <= 10; j++){
        resultado += `<p class="nro-resultado">${i} X ${j} = ${i * j}<p>`;
    }
    resultado += `<br>`;
}

contenedor.innerHTML = resultado;
