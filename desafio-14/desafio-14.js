// Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
var suma = 0;

var contenedor = document.getElementById("contenedor-resultado");
// contenedor.append("HOLA");
var resultado = ``;

var numeroUno = 1;
var numeroDos = 1;
resultado += `<p class="resultado">${numeroUno}<p>`;
resultado += `<p class="resultado">${numeroDos}<p>`

for(let i = 0; i < 8; i++){
    var suma = numeroUno + numeroDos;
    resultado += `<p class="resultado">${suma}<p>`
    numeroUno = numeroDos;
    numeroDos = suma;
}


contenedor.innerHTML = resultado;
