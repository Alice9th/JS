//Using if:

let edad = 19;
let acceso = ' ';

if (edad < 16){
    acceso = 'prohibido';
}
else if (edad >= 16 && edad <= 18){
    acceso = 'Permitido solo acompañado de un adulto';
}

else {
    acceso = 'Permitido'
}


//Ejercicio uno:

let dato = true;
let consola = ' ';

if (dato = true) {
    console.log(consola = 'es true');
}
    else {
        console.log(consola = 'es false');
    }


//Ejercicio 2:

let lenguaje = "javascript";

if (lenguaje = "javascript") {
    console.log("Estoy aprendiendo");
    }
    else {
        console.log("Lo aprenderé más adelante");
    }

//Ejercicio 3:

function puedePasar(nombre) {
    if (nombre == 'Cosme Fulanito'){
        return false;
    }
    else if (nombre !== 'Cosme Fulanito'){
        return true;
    }
}

//Cosme Fulanito con mensajes:

let entrada = ' ';
function puedePasar(nombre) {
    if (nombre == 'Cosme Fulanito'){
        console.log(entrada='No puede pasar');
        return false;
    }
    else if (nombre !== 'Cosme Fulanito'){
      console.log(entrada='Puede pasar');
        return true;
    }
}

console.log(puedePasar('Martina'))

//SWITCH:
// swithc (expresion){
//    case caso 1:
//        console.log("se cumple el caso 1");
//        break; (este corta la ejecucion del código y sale del switch)
// }


let semaforo = 'Verde';

switch(semaforo){
    case 'Verde': 
        console.log('Puedo cruzar');
    break;
    case 'Amarillo':
        console.log('Tener precaución');
        break;
    case 'Rojo':
        console.log('No cruces! Hay que esperar');
        break;
    default: //en caso de que no coincidan con los valores//
        console.log('El semáforo está fuera de servicio')
        break;
};



//Ejercicios con SWITCH:

let dia = 'jueves'
function finDeSemana (dia) {	
	switch (dia) 
	{
		case 'viernes':
		console.log('buen finde');
		break;
		case 'lunes':		
	   	console.log('buena semana');
		break;
		default:
    	console.log('buen dia');
	}
}


function tengoClases(dia) {
	switch (dia) 
	{
    	case 'lunes':
		case 'miércoles':
		case 'viernes':
		console.log("tenés clases");
		break;
		default:
		console.log("no tenés clases");
	}
}

//If ternario: no lleva llaves, sólo incluye escenarios donde se cumple o no la condición

// condicion ? expresion para el true; expresion para el false;

//Si no se quiere que pase nada en las expresiones se puede poner expresion para el true/false: " ";

//Se suele guardar en una variable lo que el if ternario guarda



let fruta = 'Manzana';

//condicion a comprobar

let resultado = fruta == 'Manzana' ? 'Buenísimo, me gustan las manzanas': 'Que mal, quería Manzanas'

console.log(resultado)

//Si se ejecuta con otra fruta, nos da 'Que mal, quería Manzanas'

