// Desafío de programación #41. Crear una función para calcular la distancia entre dos puntos definidos por sus coordenadas x, y

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function calcularDistancia() {
    var valorX1 = document.getElementById("x1").value;
    var valorY1 = document.getElementById("y1").value;

    var valorX2 = document.getElementById("x2").value;
    var valorY2 = document.getElementById("y2").value;
    if (valorX1 != "" && valorY1 != "" && valorX2 != "" && valorY2 != "") {
        var x1 = Number.parseInt(valorX1);
        var y1 = Number.parseInt(valorY1);

        var x2 = Number.parseInt(valorX2);
        var y2 = Number.parseInt(valorY2);

        //Fórmula cálculo distancia: d=√((x_2-x_1)²+(y_2-y_1)²)
        var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

        resultado = `<p class="resultado">Distancia Total: ${distancia}<p>`;
        contenedor.innerHTML = resultado;

    } else {
        alert("Error! Por favor introduzca los valores.");
    }
}