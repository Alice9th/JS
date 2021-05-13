//Estructura básica:

//for (let vuelta =1; vuelta <=5; vuelta++);{
//    console.log('Dando la vuelta número ' + vuelta);
//  }

//Donde: vuelta =1 : inicio de nuestro contador

// vuelta <= 5: condicion, se pregunta si es verdadera o falsa: verdadera: continúa con las instrucciones
// falsa: detiene el ciclo

//vuelta++: modificador de incremento o decremento

//Ejercicios:

function loro(texto, num)
{
    for (let num = 1; num <= 5; num++){
    console.log(texto)};
};


//Ejercicio Contando Impares:

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


//Ejercicio Integrador de ciclos:

const a = [23,82,46];
const b = [45,8,32];

function encontrarGanador(a,b){
    let puntosParticipanteA = 0;
    let puntosParticipanteB = 0;
    
    let puntosA = [];
    let puntosB = [];

    //primera etapa
    for (let  a = 0; a < encontrarGanador.length; a++) {
        puntosA.push();
   }

   //Etapa dos:
   for (let b = 0; b < encontrarGanador.length; b++) {
        puntosB.push();
       
   }
   
   if (puntosA > puntosB){
       return "primer";
    }
    else{
        return "segundo";
    }

}

console.log('El ganador es el participante ' + encontrarGanador(a,b));



