////NUMEROS////

//1. Se solicita que ingrese 5 números ( 1 a 1)
var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));
var num3 = parseInt(prompt("Ingrese el tercer número"));
var num4 = parseInt(prompt("Ingrese el cuarto número"));
var num5 = parseInt(prompt("Ingrese el quinto número"));

var sumatoria = num1 + num2 + num3 + num4 + num5;
var promedio = sumatoria/5;


document.write(`<h1>La suma de todos los números es: ${sumatoria}</h1> <br>`);
document.write(`<h1>El promedio de todos los números es: ${promedio} </h1>`);
