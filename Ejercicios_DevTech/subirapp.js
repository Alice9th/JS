// En un parque de diversiones nos piden un programa para verificar si los pasajeros de la montaña rusa pueden subir al juego.

function puedeSubir(altura_persona,acompannante){
   if (altura_persona > 1.40 && altura_persona <= 2.00){
       return true + ' ' + 'Puedes pasar';
   }
   if ((altura_persona >= 1.20 && altura_persona <= 1.40) && acompannante){
       return (true + ' ' + 'Debes ingresar con un acompañante');
       
   }
   if (altura_persona < 1.20){
       return (false + ' ' + 'No puedes ingresar porque eres muy bajo');
          }
   if (altura_persona > 2.00){
        return (false + ' ' + 'No puedes ingresar porque eres muy alto');
               }

}

console.log(puedeSubir(2.2, false))