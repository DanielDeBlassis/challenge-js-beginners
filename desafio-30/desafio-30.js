// Desafío de programación #30: Crear una función que sume 2 números positivos de tamaño indefinido. 
// Los números se reciben como texto y el resultado deberá ser también de tipo texto.

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function sumarNumeros(){
    var valorUno = document.getElementById("numero1");
    var valorDos = document.getElementById("numero2");

    if(valorUno.value != "" && valorDos.value != "" && valorUno.value != "0" && valorDos.value != "0"){
        var numero1 = Number.parseInt(valorUno.value);
        var numero2 = Number.parseInt(valorDos.value);
        var suma = numero1 + numero2;

        resultado += `<p class="resultado">La suma de ${numero1.toString()} y ${numero2.toString()} es igual a ${suma.toString()}.</p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Vuelva a intentar. (Ingrese un número mayor a 0)");
    }
}
