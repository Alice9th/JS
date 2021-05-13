// dado el json PELICULAS.JSON, necesitamos poder leer su contenido y manejarlo como un array de objetos para poder realizar el siguiente sistema de gestion de pelis
const fs = require('fs')

let dataJSON = fs.readFileSync( __dirname + '/PELICULAS.json', 'utf8')
let pelis = JSON.parse(dataJSON)


let objPrueba = {
    titulo:"The Irishman",
    director: "Martin Scorsese",
    genero: "drama",
    anio: 2019,
    duracionEnMinutos: 209,
    ganoOscar: true,
    calificacinoIMDB: 7.8
}

let sistemaDePeliculas = {
    listaPeliculas : pelis,
    agregarPelicula: function(pelicula) {
       return this.listaPeliculas.push(pelicula)
    },
    buscarPeliPorTitulo:function(titulo) {
       return this.listaPeliculas.find(pelicula => pelicula.titulo === titulo)
    },
    buscarPeliPorDirector: function(director) {
       return this.listaPeliculas.find(pelicula => pelicula.director === director)
    }, 
    modificarOscar:function(pelicula) {
        if (pelicula.ganoOscar) {
            pelicula.ganoOscar = false
        } else {
            pelicula.ganoOscar = true
        }
    },
    filtrarPeliculasPorGenero: function(genero) {
       return this.listaPeliculas.filter( pelicula => pelicula.genero === genero )
    },
    filtrarPeliculaPorCalificacion: function(calificacion) {
       return this.listaPeliculas.filter( pelicula => pelicula.calificacionIMDB >= calificacion )
    },
    ordenarPelisPorDuracion:function() {
       return this.listaPeliculas.sort( (a,b) => a.duracion - b.duracion )
    },
    ordenarPelisPorCalificacion:function() {
       return this.listaPeliculas.sort( (a,b) => b.calificacionIMDB - a.calificacionIMDB )
    },
    sumarCalificacion:function(num) {
       return this.listaPeliculas.map( pelicula => pelicula.calificacionIMDB + num )
    },
    ///// DE ACA PARA ABAJO SE COMPLICAN ///
    modificarGenero: function(nombrePeli, nuevoGenero) {
        let peliEncontrada = this.buscarPeliPorTitulo(nombrePeli)

        peliEncontrada.genero = peliEncontrada.genero.split()
        peliEncontrada.genero.push(nuevoGenero)
        console.log("genero agregado correctamente");
         
    },
    eliminarGenero: function(nombrePeli, generoaEliminar) {
        let peliEncontrada = this.buscarPeliPorTitulo(nombrePeli)
        let indice = peliEncontrada.genero.indexOf(generoaEliminar); 
        peliEncontrada.genero.splice(indice, 1)
        console.log("genero eliminado correctamente");
    },
    peliculasQuePuedoVer:function(minutos) {
        return this.listaPeliculas.filter( pelicula => pelicula.duracionEnMinutos >= minutos )
    },
    tengoTiempoDeVerla:function(tituloPeli, minutos) {
        let pelicula = this.listaPeliculas.find( pelicula => pelicula.titulo === tituloPeli )
       return pelicula.duracion <= minutos
    },
    eliminarPorCalificacion:function(calificacion) {
        let nuevasPelis = filtrarPeliculaPorCalificacion(calificacion)
        let pelisEliminadas = this.listaPeliculas.filter(peli => peli.calificacinoIMDB < calificacion )
        this.listaPeliculas = nuevasPelis
        return pelisEliminadas
    }, //filtro la nueva lista de pelis, y las que van a quedar afuera. guardo la nueva lista, y retorno las que quedaron afuera
}


sistemaDePeliculas.eliminarGenero("Career Girls", "Drama")
console.log(sistemaDePeliculas.listaPeliculas[0]);