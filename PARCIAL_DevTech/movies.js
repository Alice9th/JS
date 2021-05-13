const fs = require('fs')
let pelisJSON = fs.readFileSync(__dirname +'/PELICULAS.json', 'UTF-8')
let pelis = JSON.parse(pelisJSON)

//Verificar:

//console.log(pelis)

let sistemaDePeliculas = {
    listaPeliculas : pelis, //agregar las peliculas que nos trajimos de nuestro archivo json. esta bien que aparezca como un array vacio o que deberia haber en su lugar?
    agregarPelicula: function(agregarPeli){ //metodo para poder agregar peliculas a listaPeliculas
    return this.listaPeliculas.splice(0,0,agregarPeli)
    },
    buscarPeliPorTitulo:function(tituloPeli){
        return this.listaPeliculas.find(e => e.titulo === tituloPeli)
    },    //metodo para buscar peliculas por su titulo, recibe el titulo por parametro
    
    buscarPeliPorDirector: function(directorPeli){
        return this.listaPeliculas.filter(e => e.director === directorPeli)
    }, //metodo para buscar peliculas por su director, que lo recibe por parametro
    
    modificarOscar:function(){
        return this.listaPeliculas.map(e => !e.ganoOscar)
    }, //modifica la propiedad ganoOscar, es decir, si lo habia ganado se lo saca y si no se lo entrega!
    
    filtrarPeliculasPorGenero: function(generoPeli){
        return this.listaPeliculas.filter(e => e.genero === generoPeli)
    }, //metodo para obtener una lista de pelis que sean del genero que le pasemos por parametro
    
    filtrarPeliculaPorCalificacion:function(calificacionPeli){
        return this.listaPeliculas.filter(e => e.calificacionIMDB > calificacionPeli)
    }, //metodo que filtra las peliculas que tengan una calificacion mayor a la que le indiquemos por parametro
    ordenarPelisPorDuracion:function(){
       return this.listaPeliculas.sort((a,b) => a.duracionEnMinutos < b.duracionEnMinutos) 
    }, //metodo que ordene la lista de peliculas por su duracion de menor a mayor
    
    ordenarPelisPorCalificacion:function(){
        return this.listaPeliculas.sort((a,b) => b.calificacionIMDB < a.calificacionIMDB)

    }, //metodo para ordernar las peliculas por su calificacion de MAYOR A MENOR!!!
    
    sumarCalificacion: function(sumaPuntaje){
        return this.listaPeliculas.map(e => e.calificacionIMDB + sumaPuntaje)
    }, //metodo para poder sumarle una x cantidad de puntaje al que ya contienen las peliculas, retorna un array solo con la nueva calificacion.
    
    ///// DE ACA PARA ABAJO SE COMPLICAN ///
    modificarGenero: function(){
        
    }, // metodo que encuentra una sola pelicula y le modifica el genero existente (puede agregarle uno, eliminarlo y dejarlo pendiente o simplemente reemplazarlo por otro)
    
    /*peliculasQuePuedoVer:, //metodo que al ingresarle una cantidad de minutos, me devuelva una lista de peliculas cuya duracion sea menor a la ingresada
    tengoTiempoDeVerla:, // metodo que al ingresarle una cantidad de minutos y el nombre de una pelicula, la busque y le encuentre, y me diga si los minutos que yo tengo, alcanzan para que termine de ver la pelicula.
    eliminarPorCalificacion:, // metodo que al ingresarle una calificacion ELIMINE todas las peliculas cuya calificacion sea menor a la ingresada por parametro y decuelva las peliculas eliminadas.
*/
}



//console.log(sistemaDePeliculas.listaPeliculas);

/*
let peliNueva = {
    titulo: "Get Out",
    director: "Hesse Peretz",
    genero: "Comedia",
    duracionEnMinutos: 98, 
    ganoOscar: false,
    calificacionIMDB: 6.4
}
*/

//console.log(sistemaDePeliculas.buscarPeliPorDirector('Mike Riggis'));

//console.log(sistemaDePeliculas.modificarOscar());

//console.log(sistemaDePeliculas.filtrarPeliculasPorGenero('Drama'));

//console.log(sistemaDePeliculas.filtrarPeliculaPorCalificacion(8));

//console.log(sistemaDePeliculas.ordenarPelisPorDuracion());
//console.log(sistemaDePeliculas.ordenarPelisPorCalificacion());

//console.log(sistemaDePeliculas.sumarCalificacion(100));