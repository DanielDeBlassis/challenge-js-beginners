// Desafío de programación #42. Cree una función que devolverá un valor booleano que indique si dos círculos definidos por las coordenadas del centro y el radio se cruzan

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function comprobarInterseccion() {
    var valorX1 = document.getElementById("x1").value;
    var valorY1 = document.getElementById("y1").value;

    var valorX2 = document.getElementById("x2").value;
    var valorY2 = document.getElementById("y2").value;

    var radio1 = document.getElementById("r1").value;
    var radio2 = document.getElementById("r2").value;

    if (valorX1 != "" && valorY1 != "" && valorX2 != "" && valorY2 != "") {
        var x1 = Number.parseInt(valorX1);
        var y1 = Number.parseInt(valorY1);

        var x2 = Number.parseInt(valorX2);
        var y2 = Number.parseInt(valorY2);

        var r1 = Number.parseInt(radio1);
        var r2 = Number.parseInt(radio2);

        //Fórmula cálculo distancia: d=√((x_2-x_1)²+(y_2-y_1)²)
        var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

        //compruebo intersección restando la suma de los radios a la distancia de sus centros
        var calculo = distancia - (r1 + r2);
        var existeInterseccion = false;

        if (calculo < 0) {
            existeInterseccion = true;
            resultado = `<p class="resultado">Verdadero: Los círculos se intersectan.<p>`;
            contenedor.innerHTML = resultado;
        } else {
            resultado = `<p class="resultado">Falso: Los círculos no se intersectan<p>`;
            contenedor.innerHTML = resultado;
        }



    } else {
        alert("Error! Por favor introduzca los valores.");
    }
}