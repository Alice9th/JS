/* requerir módulo autos */
const autos = require("./autos")


let concesionaria ={
   autos: autos,
 
    buscarAuto: function(patente){
      for (let i = 0; i<autos.length; i++){
          if (autos[i].patente == patente) {
              return autos[i];
          }
      }
      return null;
  },

  venderAuto: function(patente){
     this.buscarAuto(patente).vendido = true;
  },
  autosParaLaVenta: function(patente){
    let autosAVender = [];
    for (let i = 0; i < autos.length; i++) {
        if (autos[i].vendido == false) {
            autosAVender.push(autos[i]);

        }
    }
    return autosAVender;
    },

    autos0KM: function(autosParaLaVenta){
        let autos0km = [];
        for (let i = 0; i < autos.length; i++) {
            if (autosParaLaVenta[i].km < 100) {
                autos0km.push(autosParaLaVenta[i]);
    
            }
        }
        return autos0km;
    },

    autosNuevos: function(autos0km){
        if (autosParaLaVenta.km > 100){
            console.log("Auto 0 km")
        }else{
            return nuevos;l;
        }
    }

//El cliente le pidió saber cuánto dinero generaron las ventas.

//María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".

//Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

    listaDeVentas: function()


}




//Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, 
//que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas


//Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que 
//se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no 
//un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona puede pagar, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.﻿

//Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.

//Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

//Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.


//Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

//La función debe de realizar los siguientes pasos:

//1) Obtener los autos para la venta

//2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.

//3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?





Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
