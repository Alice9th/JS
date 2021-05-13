//Objetos Literales:

//Estructura de datos y que puede contener propiedades y métodos.
//Para crearlos usamos {} 

//Ejemplo:

let auto = {
    patente : 'AC 134 DD'
}

//Donde:
// patente: nombre de la propiedad del objeto
// : separa el nombre de la propiedad de su valor
// 'AC 134 DD' valor, que puede ser de cualquier tipo de dato


//Propiedades de un objeto:
//Puede tener diversas. Se separan con comas.

//Ejemplo:

let tenista ={
    nombre : 'Roger',
    apellido : 'Federer'
}

console.log(tenista.nombre) //Roger
console.log(tenista.apellido) //Federer

//Métodos de un objeto:

//Una propiedad puede almacenar cualquier tipo de dato.
//Si una propiedad almacena una funcion, diremos que es un método del objeto

let tenista ={
    nombre : 'Roger',
    edad: 38,
    activo: true,
    saludar: function(){
        return 'Hola me llamo Roger';
    }
}

//Ejecucion de objeto-método: utilizando dot notation: objeto.metodo()

//Ejemplo:

console.log(tenista.saludar()); //'Hola me llamo Roger'

//Palabra reservada "this"
//ESta palabra hace referencia al objeto en sí donde estamos parados.
//Hace referencia al método que está invocando la función

//Con this.propiedad accedemos al valor de cada propiedad interna de ese objeto



//Funciones constructoras:

//Crea un objeto. Deben de empezar con mayusculas
//Permite armar un molde para luego crear todos los objetos que se necesiten

//Ejemplo:

function auto(marca,modelo){
    this.marca =marca;
    this.modelo = modelo;
}

//La funcion recibe un parámetro por cada propiedad que se desee darle

//Ejemplo:

let curso = {
    cantidadDeAlumnos:32,
    docentes: ['Nacho', 'Javier'],
    horario: 'de 19 a 21 h'
}

console.log('La cantidad de alumnos en este curso es de ' + curso.cantidadDeAlumnos);

//Ejemplo de this:

let curso = {
    cantidadDeAlumnos:32,
    docentes: ['Nacho', 'Javier'],
    horario: 'de 19 a 21 h',
    notificaciones: function(){
        return "El horario de la cursada es " + curso.horario;
    }
}

//Que se puede escribir así:


let curso = {
    cantidadDeAlumnos:32,
    docentes: ['Nacho', 'Javier'],
    horario: 'de 19 a 21 h',
    notificaciones: function(){
        return "El horario de la cursada es " + this.horario;
    }
}

//Instanciar: crear un objeto particular a partir de su función molde

//Se asigna la palabra new

let miAuto = new Auto('Peugeot', 2019);

//Siguiendo con el ejemplo de cantidadDeAlumnos:

let curso = {
    cantidadDeAlumnos:32,
    docentes: ['Nacho', 'Javier'],
    horario: 'de 19 a 21 h',
    notificaciones: function(){
        return "El horario de la cursada es " + this.horario;
    }
}

function Curso(cantidadDeAlumnos,docentes,horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;

}


//Creando el nuevo curso

let cursoDeProgramacion = new curso(50, ['Javier', 'Gerardo'], "de 19 a 21 h");
let cursoDeMarketing = new curso(45, ['Diego', 'Debbie'], "de 17 a 19 h");

console.log(cursoDeProgramacion);

//Ejemplos de PlayGround:

let perro = {
    nombre: 'Doggo',
    edad: 10,
    vacunado: true
}

