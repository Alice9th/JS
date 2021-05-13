//operador de propagación.
//Utiliza tres puntos seguidos + variable. Esparce uno a uno los valores de una variable
//dentro de una nueva variable

//Ejemplo: EL objetivo es generar un array nuevo con las 6 frutas dentro

let frutasUno = ['banana', 'pera', 'manzana'];
let frutasDos = ['durazno', 'ciruela', 'naranja'];

//Spreading

let todasLasFrutas = [...frutasUno, ...frutasDos];

console.log(todasLasFrutas);
//['banana', 'pera', 'manzana','durazno', 'ciruela', 'naranja'];

//Ejercicios:

let cursada = {
 curso: 'Fullstack',
 turno: 'Mañana',
 sede: 'Belgrano'
}

let estudianteUno = {
    nombre: 'Denise',
    email: 'denise@email.com',
    ...cursada
}

let estudianteUno = {
    nombre: 'Rocky',
    email: 'rocky@email.com',
    ...cursada
}

//De esta manera se copia todas las propiedades de la cursada dentro de cada estudiante

//Spread dentro de una funcion:

function conVariosParametros(...params){
    //codigo a ejecutar
}

//Esto permite que la funcion tome uno o n parámetros

conVariosParametros('a');
conVariosParametros('a','b');
conVariosParametros('a','b','c');

//Ejercicio 2:

let peliculasAccion = ['End Game', 'Iron Man 3', 'Capitan América'];
let peliculasComedia = ['Mi pobre Angelito', '¿Qué pasó ayer?'];

let peliculas = [...peliculasAccion, ...peliculasComedia];

console.log(peliculas);

//El Spread Operator tambien se puede utilizar con objetos

let generoCOmedias = {
    nombreGenero: 'Comedia',
    popularidad: 3
}

let miPobreAngelito = {
    nombre: 'Mi pobre angelito',
    duracion: 120,
    ...generoCOmedias
}

let quePasoAyer = {
    nombre: '¿Qué pasó ayer?',
    duracion: 110,
    ...generoCOmedias
}

//Ejemplo con iteradores:

function peliculasVistas(...nombresDePeliculas){
    for (let i = 0; i < nombresDePeliculas.length;i++){
        console.log('La persona ya vió ' + nombresDePeliculas[i]);
    }

};

peliculasVistas("End Game", "Iron Man 3", "Mi pobre angelito");

//No importa la cantidad de parámetros ingresados, la funcion siempre cumplirá su cometido

//Ejemplos de PLayGround:

let clubesUno = ['Boca', 'River', 'Racing'];
let clubesDos = ['San Lorenzo', 'Lanús', 'Gimnasia'];
let todosLosClubes = [...clubesUno, ...clubesDos];

//Tambien se pueden agregar todos los datos de un array dentro de un array existente

let parte = ['los', 'cumplas'];
let oracion = ['Que', ...parte, 'feliz'];

//Spread en objetos:

let auto = {
    marca: 'Ferrari',
    km: 0,
    anio: 2019
}

let corredorUno = {
    nombre: 'Vettel',
    edad: 32,
    ...auto
}

let corredorDos = {
    nombre: 'LeClerc',
    edad: 21,
    ...auto
}

//Se copian todas las propiedades de un objeto dentro de otro objeto existente

//Spread y funciones:

let notas = [9.3, 8.5, 3.2, 7, 10];
Math.min(...notas); //Devuelve 3.2

//Con este se puede pasar a una funcion un arrya como argumento

//REST PARAMETER

//Utilizado como último parámetro de una función, 
//permite capturar cada uno de los argumentos adicionales
//pasados a esa funcion

//El parámetro rest se escribe con ... la diferencia es que se utiliza durante
//la definicion de la funcion Y NO DURANTE SU EJECUCION:

function miFuncion(param1, param2, ...otros){
    return otros;
}

miFuncion('a', 'b', 'c', 'd', 'e');
//Retornará ['c', 'd', 'e']

//Implementando el parámetro REST, se puede definir una función que acepte
//cualquier número de argumentos

function sumar(...numeros){
    //sabiendo que números es ahora un arrya utilizamos
    //el método reduce para obtener la sumatoria
    return numeros.reduce((acum, num) => acum += num);
}

sumar(1,4); //devuelve 5
sumar(13,6,8,12,23,37); //Devuelve 99}


//COMO EL PARAMETRO REST CAPTURA TODOS LOS ARGUMENTOS RESTANTES:
//SIEMPRE DEBE SER EL ÚLTIMO PARÁMETRO DE LA FUNCION: sino da ERROR