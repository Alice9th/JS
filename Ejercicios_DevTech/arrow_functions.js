//Arrow Functions:

//Funciones con mejoras y optimizaciones respecto a las funciones tradicionales

//NO se usa la palabra reservada function y necesitan ser asignadas a una variable

//Ejemplo: si no son varias sentencias de código, no se usan {} ni return

let suma = (num1, num2) => num1 + num2;

let elDoble = num => num*2;

//Si se tienen varias sentencias de código sí se deben utilizar {} y return:

let esPar = numero => {
    if (numero % 2 === 0){
        return true;
    }
    return false;
}

//Ejemplo PlayGround:

let laMitad = numero => numero/2;
console.log(laMitad(8));


let dividir = (numeroA, numeroB) => numeroA/numeroB;
console.log(dividir(20,4));

let tengoQueTrabajar = dia => {
    if (dia == 'Sábado' || dia == 'Domingo'){
        return 'No tenés que trabajar';
    } else{
        return 'Tienes que trabajar';
    }
}

console.log(tengoQueTrabajar('Jueves'));

//Ejemplo 2 PlayGround:

let saludo = () => 'Hola mundo';

let dobleDe = numero => numero*2;

let suma = (a,b) => a + b;

let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' + fecha.getMinutes();
}

//Ejercicios:

//Para este ejercicio vamos a dar tres funciones ya definidas. 
//Nuestro trabajo será cambiarle la sintaxis y volver a escribirlas 
//para que sean funciones de tipo arrow


function dameCinco() {
    return [1,2,3,4,5];
}

//Transformada en Arrow Function:

let dameCinco = () => [1,2,3,4,5];

function multiplicarPorDos() {
    return 123 * 2 ;
  }

//Transformada en Arrow Function:

let multiplicarPorDos = () => 123*2 

function mostrarNombre() {
  return "Mi nombre es Hernán";
}

//Transformada en Arrow Function:

let mostrarNombre = () => "Mi nombre es Hernán";

