// Desafío de programación #48. Cree una función para devolver la(s) palabra(s) más larga(s) en una cadena

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function buscarPalabra() {
    var textoIngresado = document.getElementById("texto").value;

    if (textoIngresado != "") {

       var texto = textoIngresado;
       var arrayTexto = textoIngresado.split(/\W/);
       var maxLong = 1;
       var palabrasEncontradas = [];

       for(let i = 0; i < arrayTexto.length; i++){
        if(arrayTexto[i].length > maxLong){
            palabrasEncontradas = [];
            palabrasEncontradas.push(arrayTexto[i]);
            maxLong = arrayTexto[i].length;
        }else if(arrayTexto[i].length === maxLong){
            palabrasEncontradas.push(arrayTexto[i])
        }
       }

        resultado = `<p class="resultado">Resultado: ${JSON.stringify(palabrasEncontradas)}</p>`;
        contenedor.innerHTML = resultado;

    } else {
        alert("Error! Por favor introduzca los valores.");
    }
}