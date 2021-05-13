// estoy en una competencia de clavados,
// en dos arrays se muestran los 5 clavados que hacen los competidores 
//en una competencia gana el que tiene el mejor promedio de clavado
// en otra gana el competidor con el mejor clavado

let clavadosParticipanteA = [5,8,4,9,5]

let clavadosParticipanteB = [8,7,8,6,8]

let puntajePorPromedio = puntajes => 
{
    let suma = 0;
    for (let i = 0; i < puntajes.length; i++) {
        suma = suma + puntajes[i]
        
    }
    return suma/puntajes.length
}

let puntajePorMayor = puntajes => 
{
    let mayor = 0;
    for (let i = 0; i = array.length; i++) 
    {
        if (puntajes[i] > mayor)
        {
            mayor = puntajes[i]
        }
    }
     return mayor
}

function competencia(resultadosA,resultadosB,calcularPuntaje)
//calcular el puntaje del A
//calcular el puntaje del B
//fijarse cual de los puntajes es mayor
//mostrar el resultado
{
    let puntajeA = calcularPuntaje(resultadosA);
    let puntajeB = calcularPuntaje(resultadosB);
    if (puntajeA > puntajeB) 
    {
        console.log('El mejor clavado es del participante A!!! con un puntaje de: ' + puntajeA)
    } else {
        console.log('El mejor clavado es del participante B!!! con un puntaje de: ' + puntajeA)
    }
}


competencia(clavadosParticipanteA, clavadosParticipanteB,puntajePorPromedio)

competencia(clavadosParticipanteA, clavadosParticipanteB,puntajePorPromedio)