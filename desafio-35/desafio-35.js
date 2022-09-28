// Desafío de programación #33. Calcule la suma de los números recibidos en una cadena delimitada por comas

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function convertirArray(){
    var textoIngresado = document.getElementById("texto");

    if(textoIngresado.value != ""){
        var texto = textoIngresado.value;
        var filtro = texto.split(/\n/);

        for(let i = 0; i < filtro.length; i++){
            var conjunto = filtro[i].split(";");
            filtro[i] = conjunto;
        }

        resultado = `<p class="resultado">Resultado: ${JSON.stringify(filtro)}<p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Ingrese texto.");
    }
}
