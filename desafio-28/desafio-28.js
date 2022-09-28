// Desafío de programación #28: Calcular la suma de los 100 primeros números primos

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

var numero = 2;
var contador = 0;
var suma = 0;

while(contador < 100){
var divisores = 0;
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
            divisores++;
        }
    }

    if(divisores === 2){
        suma += numero;
        contador++;
    }
    numero++;
}

resultado += `<p class="nro-resultado">La suma de los primeros 100 números primos es igual a: ${suma}<p>`;
contenedor.innerHTML = resultado;




