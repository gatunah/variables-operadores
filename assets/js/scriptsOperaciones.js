////OPERACIONES MATEMATICAS

var num1 = parseInt(prompt("Ingrese el primer número"));
if (num1 == 0) {
  alert("Debe ingresar un número mayor a 0");
  num1 = parseInt(prompt("Ingrese el primer número nuevamente"));
}

var num2 = parseInt(prompt("Ingrese el segundo número"));
if (num2 == 0) {
  alert("Debe ingresar un número mayor a 0");
  num2 = parseInt(prompt("Ingrese el segundo número nuevamente"));
}
if (num2 == num1) {
  alert("Debe ingresar un número distinto al primer número");
  num2 = parseInt(prompt("Ingrese el segundo número nuevamente"));
}

var suma = num1 + num2;
var resta = num1 - num2;
var division = num1 / num2;
var multiplicacion = num1 * num2;
var modulo = num1 % num2;

document.write(`El resultado de la suma es: ${suma} <br>
El resultado de la resta es: ${resta} <br>
El resultado de la división es: ${division} <br>
El resultado de la multiplicación es: ${multiplicacion} <br>
El resultado del módulo es: ${modulo}`);
