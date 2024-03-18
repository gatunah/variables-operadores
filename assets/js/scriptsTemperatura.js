///////TEMPERATURA///////

// 1. Pide al usuario que ingrese una temperatura en Celcius y se almacena en var celsius
var celsius = parseInt(prompt("Ingrese temperatura en Celsius"));

// 2. Se realiza el cálculo interno y se almacena en var kelvin y farenheit
var kelvin = celsius + 273.15;
var fahrenheit = celsius + 32;

// 3. Se muestran datos por pantalla
document.write(`<h1>Conversión grados Kelvin.</h1>`);
document.write(`${kelvin}K°`);

document.write(`<h1>Conversión grados Fahrenheit.</h1>`);
document.write(`${fahrenheit}F°`);

