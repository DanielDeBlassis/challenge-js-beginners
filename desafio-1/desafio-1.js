// Desafío de programación #1: Imprimí los números del 1 al 10
//  Resultado: 10 9 8 7 6 5 4 3 2 1

var numero = 10;

var areaRdo = document.getElementById("contenedor-resultado");
var contenido = ``;
contenido += `<h2>Imprimiendo números del 1 al 10...</h2>`;

while(numero > 0){
    contenido += (`<p>${numero}</p>`);
    numero--;
}
console.log(contenido);
areaRdo.innerHTML = contenido;