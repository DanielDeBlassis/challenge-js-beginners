// Desafìo de programación  #2: Imprimí los números impares del 1 al 100
//RESULTADO: 1 3 5 ... 99

var contenedor = document.getElementById("contenedor-resultado");
// contenedor.append("HOLA");
var resultado = ``;

for(let i = 1; i <= 100; i++){
    if(i%2 != 0){
        resultado += `<p class="nro-resultado">${i}<p>`;
    }
}

contenedor.innerHTML = resultado;
