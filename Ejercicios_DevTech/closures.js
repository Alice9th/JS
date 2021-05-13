//Closures son funciones anidadas

//Estructura:

//Un closure vive dentro de una funcion contenedora
// y existirá solamente cuando esta sea ejecutada,
//dejando de existir cuando termine su ejecución.

function contenedora(){
    function interna(){
        //codigo a ejecutar
    }
    //codigo a ejecutar
}

//Ejemplo:

function saludoPersonalizado(nombre){
    let saludoGenerico = 'Hola';
    function saludar(){
        return saludoGenerico + ' ' + nombre;
    }
    return saludar();
}

