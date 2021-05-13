//Callbacks:
//Es una función que se pasa como parámetro de otra función.

//Ejemplos:

//Definicion:

function vaComoParametro(){
    return 'Soy un callback';
}

//Ejecucion:

//FuncionPadre (vaComoParametro);
//Soy un callback

//Operacion matemática:

let operacionMatematica = (n1, n2, operacion) => operacion(n1,n2);

//Ejercicio calculadora:

let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicar = (num1, num2) => num1 * num2;
let dividir = (num1, num2) => num1 / num2;

let calculadora = (num1, num2, operacion) => operacion(num1, num2);

console.log(calculadora(18,3, sumar));

//Tipos de callback:

//Callback anónimo: como no son llamadas por su nombre, se deben escribir dentro de otra función,
//que se encargará de llamar al callback

setTimeOut(function(){
    console.log('Hola Mundo')
} ,1000)

//Callback definido: La funcion que se pasa como callback puede ser una función previamente definida.
//Al momento de pasarla como parámetro de otra función, nos referiremos a la misma por su nombre.

let miCallback = () => console.log('Hola Mundo');
setTimeout(miCallback, 1000);

//Ejemplos:

function nombreCompleto(nombre,apellido){
    return nombre + ' ' + apellido;
};

function saludar(nombre, apellido, callback){
    return '¡Hola' + callback(nombre,apellido) + '!';
};

saludar('Juanito', 'Sánchez', nombreCompleto);

//Ejercicios PlayGround:

function doble(num){
    return num*2;
}

function triple(num){
    return num*3;
}

function aplicarCallback(num, funcion){
    return(funcion(num));
}


//Calculadora:

function suma(a,b){
    return a + b;
}

function resta(a,b){
    return a - b;
}

function dividir(a,b){
    return a/b;
}

function mult(a,b){
    return a*b;
}

let calculadora = (num1, num2, operacion) => operacion(num1, num2);

console.log(calculadora(3,4,suma))


//Using the traditional function estructure:

function calculadora(a,b,operacion){
    return operacion(a,b);
}

console.log(calculadora(3,4,suma));

//Pasar un callback reloaded

//Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 

//Para esto debemos completar la función procesar. Esta recibe dos parámetros:

// 1. El primer parámetro es un array.

//2. El segundo parámetro que recibe es una función (al que solemos llamar callback).

// La función deberá retornar un array donde cada elemento es el resultado de aplicar 
//la función pasada a un elemento del array pasado.

function agregarHttp(url) {
    return 'http://' + url;
}


function procesar(array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
                
    }
    return array;
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
}

//Al llamar agregarHttp("www.google.com") debe devolver "http://www.google.com")
//En la función "procesar" debe hacer llamado al callback recibido como parámetro
//La función "procesar(["www.google.com","www.yahoo.com"])" debe retornar ["http://www.google.com","http://www.yahoo.com"]