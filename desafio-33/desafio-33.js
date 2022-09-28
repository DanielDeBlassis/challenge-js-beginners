// Desafío de programación #33. Calcule la suma de los números recibidos en una cadena delimitada por comas

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function sumarNumeros(){
    var textoIngresado = document.getElementById("texto");

    if(textoIngresado.value != ""){
        var texto = textoIngresado.value;
        var filtro = texto.split(/\W/);
        var arrayNumeros = [];
        var suma = 0;

        for(let i = 0; i < filtro.length; i++){
            if(filtro[i] != ""){
                arrayNumeros.push(Number.parseInt(filtro[i]));
            }
        }

        for(let i = 0; i < arrayNumeros.length; i++){
            suma += arrayNumeros[i];
        }

        resultado = `<p class="resultado">Resultado: ${suma}<p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Ingrese texto.");
    }
}
