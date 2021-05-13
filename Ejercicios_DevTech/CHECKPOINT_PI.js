//La concesionaria necesita construir una lista con todos los vehículos que tiene registrados. 
//Por cada vehículo necesita conocer la siguiente información:

function Auto(marca, modelo, precio, km, color, cuotas, anio, patente, vendido){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.km = km;
    this.color = color;
    this.cuotas = cuotas;
    this.anio = anio;
    this. patente = patente;
    this.vendido = vendido;
}

let autos = [
    new Auto('Ford', 'Fiesta', 150000, 200, 'azul', 12, 2019, 'APL123', true),
    new Auto('Toyota', 'Corolla', 100000, 0, 'blanco', 14, 2019, 'JJK116', true),
]

module.exports = auto;


//Punto dos

/* requerir módulo autos */
const autos = require("./autos")


const concesionaria = {
    /* completar */
   autos: autos,
};

//Punto tres:

let concesionaria = {
    autos: autos,
  
    buscarAuto: function(patente){
        for (let i = 0; i < autos.lengt; i++) {
            if(autos[i].patente == patente){
                return autos[i];
            }
        }
        return null;
            
        }
    
    };


    //Punto 4:
    //Ahora, María les pide que agreguen la funcionalidad de 
    //venderAuto que recibe la patente y, en caso de encontrar al automóvil, 
    //le asigna el estado de vendido.




    let concesionaria = {
        autos: autos,
      
  
        buscarAuto: function(patente){
            for (let i = 0; i < autos.lengt; i++) {
                if(autos[i].patente == patente){
                    return autos[i];
                }
            }
            return null;
                
            },

        venderAuto: function(patente){
            this.buscarAuto(patente).vendido = true;
            //Esto no fue lo que entendí al leer la consigna
            //Entendí como si YO debiera ponerle el estado,
            //NO retornar el auto con el estado que de por sí tenía
            //y que fuera = a vendido

        }
        
        };


        //Punto 5:
        //La primera es poder contar, como concesionaria, con la habilidad de 
        //poder tener la lista de autos para la venta. A lo cual, María, cree 
        //que es una tarea sencilla que Juan y vos pueden encarar solos, usando 
        //la función autosParaLaVenta, aunque por las dudas ella les recuerda 
        //que no deberían de aparecer los autos que ya fueron vendidos

        /* requerir módulo autos */
const autos = require("./autos")
    
        let concesionaria = {
            autos: autos,
          
            buscarAuto: function(patente){
                for (let i = 0; i < autos.lengt; i++) {
                    if(autos[i].patente == patente){
                        return autos[i];
                     }
                    }
                    return null;                 
            },
    
            venderAuto: function(patente){
                this.buscarAuto(patente).vendido = true;
    
            },

            autosParaLaVenta: function(patente){
                let paraVenta = [];
                for(let i =0; i < autos.length; i++) {
                    if (autos[i].vendido == false){
                        paraVenta.push(autos[i]);
                    }
                }
                return paraVenta;
                   
                },
            
};


//Resultado del PlayGround QUE NO COMPRENDO POR QUÉ ME SALEN ERRORES
//¿no son códigos iguales? QUE CLASE DE MAGIA NEGRA ES ESTAAA!

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
}

//Comparando ambos códigos, el problema está en el primer bloque
//las llaves me están incluyendo algo que no deberían, por lo que
//hay que moverlas.
//Además, no lo tomaremos como caso con el else, sólo
//que nos retorne null cuando no encuentre el auto

//Punto 6:
//María, contenta con el trabajo que realizaron, les pide otra funcionalidad 
//extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles 
//de los autos para la venta son 0 km. Tené en cuenta que María considera que un 
//auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que 
//desarrollar la funcionalidad autosNuevos.

//¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?

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

    autosNuevos: function(autosParaLaVenta){
        let autos0KM = [];
        let autosNoCumplen = [];
        for (let i = 0; i < autosParaLaVenta.length; i++) {
            if(autosParaLaVenta[i].km <= 100){
                autos0KM.push(autosParaLaVenta[i]);
              
            } 
            return autos0KM      
    }
}
}; 

//Nota: no cumple con la consigna, tiene errores T__T


