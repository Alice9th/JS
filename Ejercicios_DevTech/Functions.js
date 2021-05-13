//Functions:

//Funcion declarada:

function ejemplo(){
    return "hola, soy una función";
}

//Funcion expresada (al asignarla a una variable):

let ejemplo = function (){
    return "hola, soy una función expresada";
}

//Funciones con parametros:

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

//Hagamos una función más. 
//La función debe llamarse esPar, debe recibir un número como parámetro, 
//y nos devolverá un booleano (true/false) indicándonos si ese número es divisible por dos.

function esPar(n){
    return n%2 == 0;
}

//Declarando 3 funciones:

function anterior(n){
    return n-1;
}

function triple(n){
    return n*3;
}

function anteriorDelTriple(n){
    return anterior(triple(n));
}

