// Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
var suma = 0;

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function fibo(n) {
    // console.log(fibo(n-2) + fibo(n-1));
    if (n < 2) {
        return n;
    } else {
        // resultado += `<p class="resultado">${fibo(n - 2) + fibo(n - 1)}<p>`;
        return fibo(n - 2) + fibo(n - 1);
    }
}

function calcular() {
    var valorIngresado = document.getElementById("limite");
    if (valorIngresado.value != "" && valorIngresado.value != null) {
        var limite = Number.parseInt(valorIngresado.value);
        resultado += `<p class="resultado">El resultado de ${limite} series es: ${fibo(limite)}</p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Volvé a intentarlo.");
    }
}
