// Desafío de programación #53. ¡Calcula 70! con alta precisión (Factoriales - todos los decimales)


//////////////////NO DEVUELVE TODOS LOS DECIMALES...
// var suma = 1;
// var contenedor = document.getElementById("contenedor-resultado");
// var resultado = ``;
// for(let i = 1; i <= 70; i++){
//     suma *= i;
// }
// resultado = `<p class="resultado">El factorial de 70 es igual a ${suma.toPrecision(100)}.<p>`;
// contenedor.innerHTML = resultado;

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

// Calculate factorial(n) ... using big number calculations
function factorial(n)
{
    var prod = "1";
    
    for(var i = 2; i <= n; i++)
    {
        prod = mult(prod, i.toString());
    }
    
    return prod;
}

// Multiplies sNumber1 * sNumber2
// Each number is provided as string
function mult(sNumber1, sNumber2)
{
    // Calculate partial results according to multiplication algorithm
    var partialResults = [];
    
    for(var i = sNumber2.length - 1; i >= 0; i--)
    {
        var digit = parseInt(sNumber2[i]);
        
        var partialResult = multDigit(sNumber1, digit);
        partialResult += "0".repeat(partialResults.length);
        
        partialResults.push(partialResult);
    }
    
    // Sum partial results to obtain the product
    var sum = "";
    
    for(var r of partialResults)
    {
        sum = add(sum, r);
    }
    
    return sum;
}

// Multiplies number sNumber (as string) with a single digit number
function multDigit(sNumber, digit)
{
    var p = "";
    var carry = 0;
    
    for(var i = sNumber.length - 1; i >= 0; i--)
    {
        var numberDigit = parseInt(sNumber[i]);
        
        var prod = digit * numberDigit + carry;
        var prodDigit = prod % 10;
        carry = Math.floor(prod / 10);
        
        p = prodDigit.toString() + p;
    }
    
    if (carry > 0)
        p = carry + p;
        
    return p;
}

function add(sNumber1, sNumber2)
{
    var maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    var s1 = sNumber1.padStart(maxSize, "0");
    var s2 = sNumber2.padStart(maxSize, "0");

    var s = "";
    var carry = 0;
    
    for(var i = maxSize - 1; i >= 0; i--)
    {
        var digit1 = parseInt(s1[i]);
        var digit2 = parseInt(s2[i]);
        
        var sum = digit1 + digit2 + carry;
        var digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;

        s = digitSum.toString() + s;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}


resultado += `<p class="resultado">${(factorial(70))}</p>`;
contenedor.innerHTML = resultado;
