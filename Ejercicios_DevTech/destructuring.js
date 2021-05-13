//Destructuring
//Nos permite extraer datos de arrays y objetos literales de una manera más sencilla
//y fácil de implementar

//Asignacion por desestructuracion

//Ejemplo:

//Guardar variables de manera tradicional

let colores = ['blanco', 'celeste', 'amarillo', 'rojo', 'negro'];

//Ahora utilizando destructuring:

let [colorBlanco, colorCeleste, colorAmarillo] = colores;

//Con esto JS crea las variables mencionas y les crea el valor correspondiente

//Si se hace console.log, las mismas tendran asignado el valor del dato extraído del array

console.log(colorCeleste); //'Celeste
console.log(colorBlanco); //'Blanco'
console.log(colorAmarillo); //'Amarillo'

//La asignacion por desestructuracion no modifica ni altera el array original

//Desestructuracion de un array:

let cursos = ['programacion', 'MKT', 'UX', 'Data Science'];

let [programacion, mkt, ] = cursos;

console.log(cursos); //['Programacion', 'MKT', 'UX', 'Data Science']
console.log(programacion); //Programacion
console.log(mkt); //MKT


//Para extraer info de un objeto literal:

let persona = {
    nombre: 'Denise',
    edad: 23,
    profesion: 'Programadora',
    seriesFavoritas: ['Breaking Bad', 'Game of Thrones', 'Friends']

}


let persona = {
    nombre: 'Carli',
    edad: 26,
    domicilio: 'calle falsa 123'
}

//como es objeto literal, se utilizan las llaves

let {nombre,edad} = persona;

console.log(persona); //{nombre: 'Carli', edad: 26, domicilio: 'calle falsa 123'}
console.log(nombre); //Carli
console.log(edad); //26

//Ejercicios PlayGround:

//ara este ejercicio contamos con un array de destinos del mundo ya definido.

//Queremos, usando destructuramiento, definir las variables bariloche y china, 
//y extraer del array únicamente los destinos "Bariloche" y "China".

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ , bariloche,  ,china] = destinosDelMundo;

//Desarmando la Ferrari

let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca, color} = auto;
