// Ejercicio 4:

// Variables:
// Nombre, Apellido, Edad, Peso, Altura, Prepagada
//Prepagada podría tener valor NULL

//Para constantes, podríamos tener Nombre y Apellido??

//Calcular el índice de masa corporal: peso (kg)/altura² (m)

var Nombre;
var Edad;
var Peso;
var Altura;
var Prepagada;
var IMC;

//Ejemplo para uno de los clientes:

// Nicolas Lopez, 27 años, 83.5 kg, 170 altura, Prepagada: Si

Nombre = 'Nicolas Lopez';
Edad = 27;
Peso = 83.5;
Altura = 170;
Prepagada = true;

//Ahora calculamos su IMC

console.log("EL cliente " + Nombre + " tiene un IMC de " + (IMC = Peso/(Altura)**2))




