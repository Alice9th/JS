const estudiantes = require("./estudiantes");
const {alumno, listaEstudiantes, cosme} = require("./alumno");


let curso = {
    nombreCurso: 'Marketing',
    notaAprobacion: 7.0,
    faltasMaximas: 3,
    listaEstudiantes: listaEstudiantes,
    agregarAlumno: function(alumno){
        this.listaEstudiantes.push(alumno)

    },

    //OJO!! las propiedades que vienen del apartado de ALUMNO se deben especificar con el!
        aprobar: function(alumno){
            let promedio = alumno.calcularPromedio();
            if (promedio >= this.notaAprobacion && alumno.cantFaltas < this.faltasMaximas){
                console.log("El estudiante " + alumno.nombre + " aprobó")
                return true;
                
            }
            else if (promedio >= this.notaAprobacion + (this.notaAprobacion*0.1) && alumno.cantFaltas === this.faltasMaximas){
                console.log("El estudiante " + alumno.nombre + " aprobó raspando")               
                return true;
 
            }
            
            else{
                console.log("El estudiante " + alumno.nombre + " no aprobó, pues tiene " +alumno.cantFaltas + " faltas y " + promedio + " de")
                return false;

            }
        },
        listaAprobados: function(){

            let aprobados = []
            for (let i = 0; i < this.listaEstudiantes.length; i++){
                aprobados.push(this.aprobar(this.listaEstudiantes[i]));
                
            }
            return aprobados;
        }

}


console.log(curso.listaAprobados())