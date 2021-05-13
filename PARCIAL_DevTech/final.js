//Bicicletas

//Leyendo el archivo JSON
const fs = require('fs')
let bicicletasJSON = fs.readFileSync(__dirname +'/BICICLETAS.json', 'UTF-8')

//Parseando el archivo JSON
let bicicletas = JSON.parse(bicicletasJSON)

//Se comprueba que funcione:
//console.log(bicis); funciona (retorna todos los datos en un array)

//Creando un objeto literal que representa la carrera:

let carrera = {
    bicicletas: bicicletas,
    bicisPorTanda: 6,
    bicicletasHabilitadas:function(){
        return this.bicicletas.filter(e => e.doppingPositivo === false);
    },
    listarBicicletas: function(arrayBicis){
        arrayBicis.forEach(bicicletas => {
            let estadoBici = bicicletas.doppingPositivo ? "descalificado" : "habilitado";
            console.log(
              "Id: " + bicicletas.id + " peso en Kg " + bicicletas.pesoEnKg + " estado: " + estadoBici);
          });
        },
    buscarPorCiclista: function(nombreCiclista){
        return this.bicicletas.filter(e => e.ciclista === nombreCiclista)

    },

    buscarPorLargo: function(largo){
        let bicisHabilitadas = this.bicicletasHabilitadas();
        let bicisResultantes = bicisHabilitadas.filter(e => e.largoEnCm <= largo);
        return bicisResultantes
      },
    
    ordenarPorPeso: function(){
        return this.bicicletas.sort((a,b) => a.pesoEnKg - b.pesoEnKg)
    },

    generarTanda: function(pesoBicis,rodadoBicis){
        let bicisHab = this.bicicletasHabilitadas();
        bicisHab.filter(e => e.pesoEnKg <= pesoBicis && e.rodado <= rodadoBicis);
        let bicicletasPorTanda = bicisHab.slice(0, this.bicisPorTanda);
        return bicicletasPorTanda;
    
    },

    calcularPodio(tandaGenerada) {
        let bicisCompitiendo = tandaGenerada.sort((a, b) => b.puntaje - a.puntaje).slice(0, 3);

        return (`El ganador es: ${bicisCompitiendo[0].ciclista}, con un puntaje de: ${bicisCompitiendo[0].puntaje};
el segundo puesto es para: ${bicisCompitiendo[1].ciclista}, con un puntaje de: ${bicisCompitiendo[1].puntaje}
y el tercer puesto es para: ${bicisCompitiendo[2].ciclista}, con un puntaje de: ${bicisCompitiendo[2].puntaje}`)
    }

};

// Punto C: Para ver las bicis habilitadas: 
//console.log(carrera.bicicletasHabilitadas()); 


//Punto D: para listar las bicis:
//console.log(carrera.listarBicicletas(bicicletas));

//Punto E: buscar por nombre de Ciclista:
//console.log(carrera.buscarPorCiclista('Dane Lindhe'));

//Punto F: filtrar bicis habilitadas
//console.log(carrera.buscarPorLargo(100));

//Punto G: ordenar por peso de menor a mayor
//console.log(carrera.ordenarPorPeso());

//Punto H: retornar un array de bicicletas, que cumpla con condiciones
console.log(carrera.generarTanda(8,20));

//Punto I: Podio
//console.log(carrera.calcularPodio(carrera.generarTanda(90, 230)));
