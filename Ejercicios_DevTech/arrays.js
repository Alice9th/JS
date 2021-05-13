/* How to use Arrays */ 

//Metodos:

//push: deja agregar un elemento al final de un array


let colores = ['Azul', 'Verde', 'Morado'];

//Se desea agregar otros dos colores: Amarillo y violeta

colores.push('Amarillo', 'Violeta');

//pop(): saca el último elemento del array y lo retorna

let nombres = ['Juan', 'Julia', 'Mariana'];
nombres.pop(); //'Mariana'

//Si se necesita el elemento extraído, es mejor guardarlo en una variable
let nombres = ['Juan', 'Julia', 'Mariana'];
let elUltimo =nombres.pop(); //'Mariana'
console.log(elUltimo); //'Mariana'


//Métodos  shift() y unshift()

//shift() sacará del array el elemento con índice [0]

let nombres = ['Juan', 'Julia', 'Mariana'];
let elPrimero = nombres.shift();
console.log(nombres); //'Julia', 'Mariana'
console.log(elPrimero); //'Juan'

//unshift() inserta uno o más datos al principio del array

let colores = ['Azul', 'Blanco', 'Rojo'];
colores.unshift('Amarillo', 'Violeta')
console.log(colores) //['Azul', 'Blanco', 'Rojo', 'Amarillo', 'Violeta']

//Ejercicio 1:

let notas = [3,5,10,9,7,8,8,8];
notas.push(1);
notas.push(2);
notas.push(4); //con push se agrega un nuevo elemento al final, de forma secuencial
let elUltimo = notas.pop();
console.log(notas)
console.log(elUltimo)

//[3,5,10,9,7,8,8,8,1,2]
//4

//Ejercicio 2:

let notas = [3,5,10,9,7,8,8,8];

notas.shift();
notas.shift();

console.log(notas);
//[10,9,7,8,8,8]

//Si utilizamos unshift con este mismo ejercicio:

notas.unshift(1);
console.log(notas)

//[1,10,9,7,8,8,8]


//Método indexof(): recibe como parámetro una cadena de texto, que se buscará dentro del array.


let colores = ['Azul', 'Blanco', 'Rojo'];
colores.indexOf('Rojo'); //da como resultado 2

//Si el valor buscado no está dentro del array, el método indexof() devuelve -1 

//Método lastIndexOf(), busca indice desde el último elemento

//Método join(): unifica todos los elementos en un único string separados por una coma.

let diasEntreSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
diasEntreSemana.join();
//"lunes, martes, miercoles, jueves, viernes"

//Para separar por otro caracter se especifica entre los paréntesis del join

let diasEntreSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
diasEntreSemana.join('-');
//"lunes-martes-miercoles-jueves-viernes"

//Posiciones de un array:

let pelisFavoritas = ['Star Wars', 'Kill Bill', 'Alien'];
pelisFavoritas[2]; //'Alien'

//Longitud de un array:

pelisFavoritas.length;
//devuelve 3, el número de elementos en el array


//Ejercicios PlayGround:



let arrayFrase = [
  "No",
  "he",
  "fracasado,",
  "simplemente",
  "me",
  "he",
  "topado",
  "con",
  "diez",
  "mil",
  "soluciones",
  "equivocadas"
];

let fraseNueva = arrayFrase.join(' ');

console.log(fraseNueva)


/* How to use the pop method */ 

let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  
  let alumnoEgresado = estudiantes.pop()

  /*How to use shift */

  let estudiantes = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]

let alumnoDeBaja = estudiantes.shift([{nombre: 'Alvaro', promedio: 9, curso: 'Android'}]);

/*How to use Unshift */

let estudiantes = [
  {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
  },
  {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
  }
]

estudiantes.unshift({nombre: 'Mariana', promedio: 9, curso: 'Full Stack'});

estudiantes.unshift({nombre: 'Francisco', promedio: 2, curso: 'Android'});

console.log(estudiantes)


/* For and If */

function noParesDeContarImparesHasta(numero){
  let  impar = [];
  for (let i = 0;  i <= numero; i++){
      if(i % 2 !== 0){
          impar.push(i)
          
      }

  }
  return impar.length
}

console.log(noParesDeContarImparesHasta(12))


/* ONLY CAPITAL WORDS */

let films = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"] 

console.log(films[1]); 
films [0] = films[0].toUpperCase(); 
films [1] = films[1].toUpperCase(); 
films [2] = films[2].toUpperCase(); 
films [3] = films[3].toUpperCase(); 
films [4] = films[4].toUpperCase(); 
console.log(films); 

function mayus(Array){
  for (let i = 0; i < Array.length; i++){
    Array[i] = Array[i].toUpperCase()
  }
  return filmsArray;
}

console.log(mayus(films))
  

