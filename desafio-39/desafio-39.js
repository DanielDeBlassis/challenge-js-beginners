// Desafío de programación #39. Implementar el cifrado César

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function cifrarTexto() {
    var textoIngresado = document.getElementById("texto").value;

    if (textoIngresado != "") {
        var texto = textoIngresado.toLowerCase();
        var arrayCodigos = convertirArray(texto);

        for(let i = 0; i < arrayCodigos.length; i++){
            if(arrayCodigos[i] >= 97 && arrayCodigos[i] <= 119){
                arrayCodigos[i] += 3;
            }else if(arrayCodigos[i] >= 120 && arrayCodigos[i] <= 122){
                arrayCodigos[i] -= 23;
            }else if(arrayCodigos[i] === 32){//capto los espacios
                arrayCodigos[i] = 36;
            }
        }

        //convierto código ascii a caracteres cifrados
        var textoCifrado = String.fromCharCode(...arrayCodigos);

        resultado = `<p class="resultado">Resultado: ${textoCifrado}<p>`;
        contenedor.innerHTML = resultado;
    } else {
        alert("Error! Ingrese texto.");
    }
}
//convierte texto en array de códigos ascii
//retorna un array con los códigos
function convertirArray(text) {
    var texto = text.toLowerCase();
    var newArr = [];

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < texto[i].length; j++) {
            newArr.push(texto[i].charCodeAt(j));
        }
    }

    return newArr;
}