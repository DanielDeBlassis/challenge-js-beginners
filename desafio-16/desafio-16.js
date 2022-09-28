// Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
var suma = 0;

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function esPrimo(){
    var valorIngresado = document.getElementById("numero");

    if(valorIngresado.value != "" && valorIngresado.value != null && valorIngresado.value != "0" && valorIngresado.value != "1"){
        var numero = Number.parseInt(valorIngresado.value);
        var divisores = 0;

        for(let i = 0; i <= numero; i++){
            if(numero%i === 0){
                divisores++;
            }
        }
        if(divisores === 2){
            resultado += `<p class="resultado">El número ${numero} es primo, ya que puede ser dividido por 1 y por si mismo.</p>`;
            contenedor.innerHTML = resultado;
            return true;
        }else{
            resultado += `<p class="resultado">El número ${numero} NO es primo, ya que puede ser dividido por ${divisores} números.</p>`;
            contenedor.innerHTML = resultado;
            return false;
        }
    }else{
        alert("Error! Volvé a intentar. (El número debe ser mayor a 1)");
    }
}
