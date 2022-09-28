// Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
//  [1,2,3,4,5,6,7,8,9,10]

var array = [1,2,3,4,5,6,7,8,9,10];
var suma = 0;

var contenedor = document.getElementById("contenedor-resultado");
// contenedor.append("HOLA");
var resultado = ``;

for(let i = 0; i < array.length; i++){
    suma += array[i];
}
resultado = `<p class="resultado">La suma de los números del array es igual a ${suma}.<p>`;

contenedor.innerHTML = resultado;
