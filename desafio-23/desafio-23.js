// Desafío de programación #23: Invertir una cadena de caracteres
// Ejemplo:
// "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
// "bienvenido" debería quedar como "odinevneib"

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function invertirCadena(){
    var textoIngresado = document.getElementById("texto");
    if(textoIngresado.value != ""){
        var texto = textoIngresado.value;
        var textoInvertido = ``;
        for(let i = (texto.length - 1); i >= 0; i--){
            textoInvertido += texto[i];
        }
        resultado = `<p class="resultado">La cadena '${texto}' invertida sería: '${textoInvertido}'<p>`;
        contenedor.innerHTML = resultado;
    }else{
        alert("Error! Ingrese texto.");
    }
}