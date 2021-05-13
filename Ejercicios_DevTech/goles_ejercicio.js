// Crear las 4 funciones expresadas (dentro de variables) básicas de una calculadora:
// Suma
// Resta
// Multiplicación
// División.
// Las 4 funciones deberán recibir dos parámetros y retornar el resultado de la operación matemática correspondiente.

//SUMA

function suma(numero1, numero2){
    suma = numero1 + numero2
    return suma
}
console.log(suma(3,5))

//RESTA


function resta(numero1, numero2){
    resta = numero1 - numero2
    return resta
}
console.log(resta(3,5))

//MULTIPLICACION

function mult(numero1, numero2){
    mult = numero1*numero2
    return mult
}
console.log(mult(3,5))

//DIVISION
function div(numero1, numero2){
    div = numero1/numero2
    return div
}
console.log(div(3,5))


//GOLES

var nombreJugador;
var golesJugador;
var precioEnDolares;

saldo = 0;

function hacerGol(golesJugador)
{
    score = golesJugador++
    nuevo_saldo = saldo + 10000
    return score + ' ' + 'GOL!!!!!' + 'El jugador ha ganado: ' + nuevo_saldo
}

console.log(hacerGol(5))