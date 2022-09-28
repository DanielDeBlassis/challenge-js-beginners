// Desafío de programación #6: Calcula 10! (10 factorial)
//  10 * 9 * 8 * ... * 1
var suma = 1;

var contenedor = document.getElementById("contenedor-resultado");
// contenedor.append("HOLA");
var resultado = ``;

for(let i = 1; i <= 10; i++){
    suma *= i;
}
resultado = `<p class="resultado">El factorial de 10 es igual a ${suma}.<p>`;

contenedor.innerHTML = resultado;
