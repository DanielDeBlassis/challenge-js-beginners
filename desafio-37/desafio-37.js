// Desafío de programación #37. Crear una función que convierta una cadena de texto en un array que contenga los códigos ASCII de cada caracter

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function convertirArray(){
    var textoIngresado = document.getElementById("texto");

    if(textoIngresado.value != ""){
        var texto = textoIngresado.value;
        var newArr = [];

        for(let i = 0; i < texto.length; i++){
            for(let j = 0; j < texto[i].length; j++){
                newArr.push(texto[i].charCodeAt(j));
            }
        }

        resultado = `<p class="resultado">Resultado: ${JSON.stringify(newArr)}<p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Ingrese texto.");
    }
}

