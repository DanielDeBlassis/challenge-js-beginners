// Desafío de programación #7: Calcula la suma 
// de todos los números impares mayores que 10 y menores que 30
var suma = 0;

var contenedor = document.getElementById("contenedor-resultado");
// contenedor.append("HOLA");
var resultado = ``;

for(let i = 11; i < 30; i++){
    if(i%2 != 0){
        suma += i;
    }
}
resultado = `<p class="resultado">La suma de todos los números impares mayores que 10 y menores que 30, es igual a ${suma}.<p>`;

contenedor.innerHTML = resultado;
