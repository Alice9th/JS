//Bloque de código reutilizable

// Primero: crear el archivo de entrada a la aplicacion (normalmente app.js)
// Segundo: escribir el script que se necesita
// Tercero: Dejarlo accesible. Utilizar module.exports = 'nombre variable'
// Cuarto:Requerir el modulo deseado, utilizando require(), retornando algo y debe
//de ser guardado su contenido

//Ejemplo
const fs = require('fs');

//Para referirnos al módulo dentro de la carpeta contenedora 
//(donde series es la carpeta e index el módulo)

const series = require('./series/index')

//Como requerir un módulo:

let modulo = require('nombreDelModulo')

//Para ver las propiedades del módulo hacerle un console.log de
//la variable en la que se almacenó tal

//Ejemplos:

//Teniendo app.js

console.log(1);

//Vamos a crear una prueba en un txt (preuba.txt), utilizando un modulo con el que lo leeremos

let fs = require('fs');
console.log(fs); //Da por resultado la lista de todas sus propiedades
let moment = require('moment');

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');

//__dirname reemplaza el path de donde está el archivo

console.log(moment().format('MMM Do YYYY'));

//Para crear un modulo propio:

// 1. Crear una carpeta en la raiz del proyecto con el mismo nombre del modulo
// 2. Dentro de esta carpeta crear el modulo
// 3. Un modulo es un archivo con extension .js (suele recibir nombre de index.js)
// 4. Para usarlo hay que exportar la variable que se va a compartir:
// module.exports = (info que se quiera exponer) superHeroes (ejemplo, que sería lo que
//hay en el archivo index.js, info sobre SUper Heroes)
//Es FUNDAMENTAL respetar el nombre que se le dio a la carpeta

const heroes = require("./superheroes");

//SI se quiere acceder a todo el objeto:

console.log(heroes[0])
/*{nombre: 'Wonder Woman',
poder: 'Golpear con laigo',
saludar: [function: saludar]
}*/ 

//Ejemplos video:

//Se crea una carpeta: superheroes, dentro se crea el archivo index.js que contiene:

let superheroes = [
    {
        nombre: 'Batman'
    },
    {
        nombre: 'Iron Man'
    },
    {
        nombre: 'Mujer Maravilla'
    }
];

module.exports = superheroes; //se pone el nombre de la variable a exportar


//Hay que exportar la info, regresamos al archivo app.js (donde vamos a usarla)

let heroes = require('./superheroes'); //ruta de donde se encuentra el archivo
//Si el archivo index, se llama de otra manera se debe agregar al path: (./superheroes/otro_nombre_para_index.js)

console.log(heroes); //Nos trae la info del otro archivo

//Ejemplo PlayGround:

let series = ['Friends', 'Mr. Robot', 'Breaking Bad']
module.exports = series;

//Exportar el modulo

const series = require('./series/index');

//Para requerir un modulo se hace uso de la funcion require()

let modulo = require('nombreDelModulo');

//Exportar módulos
//Tenemos un array de películas y necesitamos poder compartirlo con otras partes del 
//sistema.
//Nuestro trabajo será almacenar este array en la variable arrayDePeliculas 
//y exportarlo usando módulos.

let arrayDePeliculas = ["Harry Potter","Her", "Up", "Lego"];

module.exports = arrayDePeliculas;

//Importar módulos

//Nuestro objetivo será crear 3 variables: moduloNativo, moduloInstalado y moduloPropio, en donde cada una almacenará un módulo distinto.

//La primera deberá requerir el módulo http, la segunda el módulo axios y la tercera un módulo local
// exportado del archivo miFuncion.js. 
//Este último archivo se encuentra en la misma carpeta que nuestro index.js.

let moduloNativo = require('http');

let moduloInstalado = require('axios');

let moduloPropio = require('./miFuncion');

//Requerir objetos

//Desde un nuevo archivo queremos acceder a los datos que expone el archivo perro.js. Este expone un objeto literal que tiene los atributos nombre y edad.
//Nuestro trabajo será crear la variable perro y requerir el módulo perro.
//Luego, debemos hacer un console.log() para mostrar los datos usando la siguiente frase:
//"El perro se llama _____ y tiene ___ años"

let perro = require('./perro');
console.log("El perro se llama " + perro.nombre + " y tiene " + perro.edad + " años");