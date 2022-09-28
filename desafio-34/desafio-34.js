// Desafío de programación #34. Crea una función que devolverá un arreglo con palabras dentro de un texto

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function convertirArray(){
    var textoIngresado = document.getElementById("texto");

    if(textoIngresado.value != ""){
        var texto = textoIngresado.value;
        var filtro = texto.split(/\W/);
        var soloPalabras = [];
        var suma = 0;

        for(let i = 0; i < filtro.length; i++){
            if(filtro[i] != ""){
                soloPalabras.push(filtro[i]);
            }
        }

        resultado = `<p class="resultado">Resultado: ${JSON.stringify(soloPalabras)}<p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Ingrese texto.");
    }
}
