function Estudiante(nombre, cantidadFaltas, notas){
    this.nombre = nombre;
    this.cantidadFaltas = cantidadFaltas;
    this.notas = notas;
}

//Lista de Estudiantes QUE SUPUESTAMENTE había que crear en el paso uno pero que no
//indicaron sino en el paso 3 ¬_¬

let estudiantes = [
    new Estudiante("Martina Perez", 3, [7,7.5,9,10]),
    new Estudiante('Fulanito Cosme', 2, [5,8,8.5,9]),
    new Estudiante('Goku José', 1, [10,9.5,7.5,9.5]),
]


module.exports = Estudiante;
