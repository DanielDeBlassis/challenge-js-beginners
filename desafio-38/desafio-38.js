// Desafío de programación #38. Crear una función que convierta un arreglo de códigos ASCII en una cadena de texto

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function convertirArray(){
    var textoIngresado = document.getElementById("texto").value;

    if(textoIngresado != ""){
        //tomo el array con los números como texto
        var arrayTexto = textoIngresado;
        //elimino corchetes y comas
        var numeroTexto = arrayTexto.replaceAll(/\[|\]|\,/g, "");
        //elimino expacios y genero un array solo con números en texto
        var arrayNumeroTexto = numeroTexto.split(" ");
        //creo variable para almacenar los números covertidos
        var arrayNumeros = [];

        for(let i = 0; i < arrayNumeroTexto.length; i++){
            arrayNumeros.push(Number.parseInt(arrayNumeroTexto[i]));
        }

        //convierto código ascii a caracter
        var textoResultado = String.fromCharCode(...arrayNumeros);

        resultado = `<p class="resultado">Resultado: ${textoResultado}<p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Ingrese texto.");
    }
}