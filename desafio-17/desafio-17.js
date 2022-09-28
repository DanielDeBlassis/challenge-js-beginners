// Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
// Ejemplo:
//    123 = 1 + 2 + 3 = 6
//    2 = 2
//    1234 = 1 + 2 + 3 + 4 = 10

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function sumarDigitos(){
    var valorIngresado = document.getElementById("numero");

    if(valorIngresado.value != "" && valorIngresado.value != null && valorIngresado.value != "0"){
        var numero = Number.parseInt(valorIngresado.value);
        var nroDividir = numero;
        var suma = 0;
        while(nroDividir > 0){
            suma += Number.parseInt(nroDividir%10);
            nroDividir = Number.parseInt(nroDividir / 10);
        }
        resultado += `<p class="resultado">La suma de los dígitos del número ${numero} es igual a ${suma}.</p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Vuelva a intentar. (Ingrese un número mayor a 0)");
    }
}
