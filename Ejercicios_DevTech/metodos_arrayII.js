//Slice:

array.slice(inicio,fin);
//indicamos los índices de inicio y fin
//para obtener el nuevo array que es una extracción y copia del array original
//el final no está incluído


//Ejemplo:

let numeros = [3,4,5,6,7];
let subArray = numeros.slice(0,3);

console.log(subArray); // [3,4,5]

//Splice:
//Remueve/agrega elementos de un array
//Recibe 3 parámetros: inicio, cant(opcional), items(opcional)

//array.splice(inicio, cant, item1,item2,...);

//indicamos el índice, la cant y lso elementos

//Ejemplo:

let numeros = [3,4,5,6,7];
numeros.splice(0,0,2);
console.log(numeros); // [2,3,4,5,6,7]

numeros.splice(1,2);
console.log(numeros); // [2,5,6,7]

//Sort:
//Ordena elementos de un array
//Recibe un callback como parámetro (opt)
//La funcion recibe dos parámetros: elementos a comparar
//el primero vs el segundo

array.sort(); //ordenamiento con la posicion de valor unicode

array.sort(callback); //la función como parámetro

//Ejemplo:

let marcas = ['samsung', 'xiaomi', 'apple'];
marcas.sort();
console.log(marcas);
// ['apple','samsung','xiaomi']

let marcas2 = ['samsung', 'xiaomi', 'apple', '3M'];
marcas2.sort();
console.log(marcas2);

// ['3M', 'xiaomi','apple','samsung']

let numeros = [10,3,4,52,6,7];
numeros.sort();
console.log(numeros);
//[10,4,52,7,8,9]

//Este anterior nos muestra un resultado incorrecto

function compare(a,b){
    return a-b;
}

numeros.sort(compare);
console.log(numeros);
//[4,7,8,9,10,52]

//Flat:
//Desenvuelve subarrays dentro de arrays
//NO modifica el array original
//Recibe como parámetro (opt) un nivel de
//profundidad (cuanto debe aplanarse el array anidado)

//array.flat(); //metodo sin parámetro

//array.flat(#); //método con parámetro nivel #

//Ejemplo:

let numeros = [1,2,3,[4],[[5,6]]];
let flatten = numeros.flat();
console.log(flatten);
//[1,2,3,4,[[5,6]]];

let flatten2 = numeros.flat(2);
console.log(numeros2);
//[1,2,3,4,5,6]

//Includes:
//Determina si un array incluye un elemento
//Devuelve true si hay coincidencia o false, si no
//Parámetros: elemento a buscar (requerido)
//posicion (opt)

array.includes(elemento, inicio);
//indicamos el elemento s abuscar
//se indica posicion a comenzar


//Ejemplo:

let numeros = [3,4,5,6,7];
let res1 = numeros.includes(4);
console.log(res1); //true

let res2 = numeros.includes(4,2);
console.log(res2); //false

let saludo = ["Hello", "World"];
let res1 = saludo.includes("hello");
console.log(res1); //false porque distingue MAY/MIN

let res2 = saludo.includes("Hello");
console.log(res2); //true

//Find:
//Devuelve el valor del primer elemento
//de un array que cumple con una función
// especificada (callback)
//El callback se ejecuta sobre cada indice del array
//hasta devovler el valor verdadero
//Toma 3 parámetros: elemento, index, array

array.find(callback(e,array));
//se indica elemento a buscar
//y posicion a comenzar

//Ejemplo con function:
let criptos = [
    {nombre: 'Bitcoin', simbolo: 'BTC'},
    {nombre: 'Ethereum', simbolo: 'ETH'},
    {nombre: 'Cardano', simbolo: 'ADA'}
];

function esBitcoin(criptos) {
    return criptos.nombre == 'Bitcoin';
}

console.log(criptos.find(esBitcoin));
// {nombre: 'Bitcoin', simbolo: 'BTC'}

//Ejemplo con arrow functions:


//Ejemplo:
let criptos = [
    {nombre: 'Bitcoin', simbolo: 'BTC'},
    {nombre: 'Ethereum', simbolo: 'ETH'},
    {nombre: 'Cardano', simbolo: 'ADA'}
];

let res = criptos.find(e => e.nombre === 'Bitcoin');

console.log(criptos.find(esBitcoin));
// {nombre: 'Bitcoin', simbolo: 'BTC'}

