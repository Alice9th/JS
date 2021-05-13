//Ejercicio 1 al 4:

//1. Crear un archivo arrays.js que contenga el código:

let films = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function arrayValidacion(array){
	if(array[1] === "totoro"){
		console.log(array[1]);
		return true;

	}else{
		return false;
	}
}
console.log(arrayValidacion(films));

//Curioso que sea tan elaborada la confirmación...
//Yo sólo hubiera puesto:

console.log(films[1]) //y debe dar totoro

//Otra solucion:
console.log(" el segundo elemento del array es: " + films[1]);

// 2.  En el mismo archivo nos piden que los nombres de las películas estén en MAYÚSCULAS usando 
//.toUpperCase() para cada elemento. Asegurarnos que entregamos el array con todas 
//las películas en mayúsculas.
//Forma uno de volver el array mayuscula

function arrayMayuscula(array)
{
	for(let i=0; i < array.length ; i++){
		array[i] = array[i].toUpperCase();
	}

}

//Forma dos de volver array mayuscula
function arrayMayuscula()
{
   let nuevoArray = films.map(function(films) {  return films.toUpperCase()});
   films =  nuevoArray;
}

arrayMayuscula(films);
console.log(films);

//---------------------------------------------------
//forma tres de mayuscula
function arrayMayuscula2(array)
{
  let nuevoArray = array.map(function(array) {  return array.toUpperCase()});
  return  nuevoArray;

}

//En el mismo archivo pegar ese código y crear una función que agregue cada animación del array cartoons al 
//array films. 
//No quieren un nuevo array, deben agregarse al array films.
// unir array y convertir cartoons mayuscula (se hace con la función anterior)

films = films.concat(cartoons);

console.log(films);
//["star wars","totoro","rocky","pulp fiction","la vida es bella",
//"toy story","finding Nemo","kung-fu panda","wally","fortnite"]//

//Utilizando spread: (aunque este no cumple la condición de que
//no sea un array nuevo! OJO!)

let films = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

let todosLosFilms = [...films,...cartoons];

console.log(todosLosFilms);
//["star wars","totoro","rocky","pulp fiction","la vida es bella",
//"toy story","finding Nemo","kung-fu panda","wally","fortnite"]

//Utilizando spread y el mismo array:
let films = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

films = [...films,...cartoons];

console.log(films);
//["star wars","totoro","rocky","pulp fiction","la vida es bella",
//"toy story","finding Nemo","kung-fu panda","wally","fortnite"]

//Utilizando push:

films.push(cartoons[4]); //Se haría con cada uno, o en el caso
						//en que sólo se quiera añadir un elemento
						//se hace con push y el índice del elemento
						//que se quiere del array elegido


   

//Uno de los desarrolladores advirtió que la última animación es en realidad un videojuego. 
//Eliminar ese último elemento del array cartoons antes de pasarlos a film

function unirArray()
{
	cartoons.pop();
	let cartoonsMayuscula = arrayMayuscula2(cartoons);
	films = films.concat(cartoonsMayuscula);
}

unirArray()
console.log(films);

//Again, hay maneras más simples: juntando los dos arrays en una nueva variable y
//utilizando directamente el método pop()

let films = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
function arrayMayuscula(array)
{
	for(let i=0; i < array.length ; i++){
		array[i] = array[i].toUpperCase();
	}

}

let films2 = films.concat(cartoons)
arrayMayuscula(films2);
films2.pop()
console.log(films2)

//si se almacena films2.pop() en una variable, me guardará 
//el valor eliminado

videoJuego = films2.pop(); //FORNITE


// Ejercicio 5 ----------------------------------------------------------

//Finalmente, nos envían dos arrays con las calificaciones que hacen distintos usuarios del mundo 
//de estas películas de la siguiente forma:

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 9, 10, 6, 7, 9];

//forma uno de hacer comparcion arreglos
function comparacionString(){

	if(asiaScores.toString() === euroScores.toString()){
		console.log("son iguales los dos arreglos");

	}
	else{
		console.log("son diferentes los arreglos --- comparacion1");

	}
}

comparacionString()

//forma dos de hacer comparcion arreglos
function comparacionString2()
{
   let validacion = 0;
   for(let i = 0; i < asiaScores.length; i++)
   {
	   for(let j = 0; j < euroScores.length;j++){
		if(i === j)
		{
			if(asiaScores[i] != euroScores[j]){
				validacion++;		
			}
		}

	   }
	   
   }

   if(validacion === 0)
	console.log("el arreglo es igual ----- comparacion2");
   else
	   console.log("el arreglo no es igual ------- comparacion2");
}

comparacionString2();


//Una forma más sencilla:

console.log(asiaScore.toString() === euroScore.toString()); //false