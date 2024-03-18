///////DIAS///////

//1. Se solicita que ingrese una cantidad de dias
var dias = parseInt(prompt("Ingrese una cantidad de días"));

//2. Se guardan en variables los valores de año y semana
var año = 365;
var semana = 7;

//3. Se inicializan variables
var calculoAño = 0;
var calculoSemana = 0;
var calculoDias = 0;

//4. Se realizan calculos segun las condiciones
if (dias >= año) {
  calculoAño = dias / año;
  var restoSemanas = dias % año;
}else{(dias < año)
  var restoSemanas = dias;
}

  if (restoSemanas >= semana ) {
  calculoSemana = restoSemanas / semana;
  var restoDias = restoSemanas % semana;
}
if (restoDias > 0) {
  calculoDias = restoDias;
}

//5. Se imprimen valores
document.write(
  `<h1>Cantidad de días ingresados: ${Math.floor(dias)} <br> <h1>`
);
document.write(`Años: ${Math.floor(calculoAño)}<br> 
Semanas: ${Math.floor(calculoSemana)} <br>
Días: ${calculoDias}`);
