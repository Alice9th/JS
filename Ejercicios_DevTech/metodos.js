let notas = [10,4,5,8,9,2,7];

let notasHastaEl100 = notas.map(function(numero){
    return numero * 10;
});

//console.log(notasHastaEl100);

//Quiero saber notas aprobadas

let notasAprobadas = notas.filter(function(numero){
    return numero >= 7;
});

console.log(notasAprobadas);

//Si se quiere una suma de todas esas notas

let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero;  //necesita dos parámetros: un estado y los valores
});

console.log(sumaNotas);

//Si se quiere realizar una operacion por cada elemento del array

notas.forEach(function(valor,indice){
    console.log("En la posicion " + indice + " tengo el valor " + valor);
});

//Ejercicios PlayGround:

//Map:
//Nos dejaron una lista con los horarios de partida de algunos aviones. 
//Esta lista se reproduce directamente en las pantallas del aeropuerto y, 
//a modo de travesura, queremos atrasar una hora cada partida.

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(numero){
    return numero -1;
});

//Con la función por fuera:

let horariosPartida = [12, 14, 18, 21];

let x = function(numero){
    return numero -1;
} ;

let horariosAtrasados = horariosPartida.map(x)

//Filter:
//Necesitamos enviarle un diploma a los alumnos que están aprobados y 
//un e-mail a los alumnos desaprobados para acordar un recuperatorio. 
//Por lo tanto, necesitamos dos listas: una lista que almacene todos 
//los aprobados y otra los desaprobados. Deberemos guardarlos en las 
//variables aprobados y desaprobados respectivament.


let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(obj) {
    return obj.aprobado == true;
});

console.log(aprobados);

let desaprobados = estudiantes.filter(function(obj) {
    return obj.aprobado == false;
});
console.log(desaprobados);

//Reduce:
//Nos dejaron un array con las vueltas que dio una corredora entrenando en 
//distintos momentos para una maratón.
//Nuestro desafío será crear la variable totalVueltas 
//y almacenar en ella el total, usando el método reduce.

let vueltas = [5, 8, 12, 3, 22];

let totalVueltas = vueltas.reduce(function(estado,number){
    return estado + number;
});

//ForEach:
//Para este ejercicio tenemos el array listaDeSupermercado. 
//Nuestro trabajo será mostrar cada ítem de esa lista por consola 
//utilizando un foreach.

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(function(valor,indice){
    console.log(valor);
});

