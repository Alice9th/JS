const fs = require('fs')
let departamentosJSON = fs.readFileSync(__dirname +'/departamentos.json', 'UTF-8')
let departamentos = JSON.parse(departamentosJSON)/*nos trae el objeto en este caso es un array*/

let inmobiliaria = {
    departamentos: departamentos,
    departamentosDisponibles: function(){
        return this.departamentos.filter(e => e.disponible === true);
    },
    listarDepartamentos: function(arrayDepartamentos){
        let disponibles = this.departamentos.disponible ? "Disponible" : "Alquilado"; //cambiamos true y false por Disponible y Alquilado respectivamente
        let disponibilidad = this.departamentos.forEach(e => {
            console.log('El ide es : ' + e.id + 'el precio es : ' + e.precioAlquiler + 'estado : ' + disponibles)
            
        });
    },
    buscarPorId: function(idDepartamento){
        return this.departamentos.find(e => e.id === idDepartamento);
    },
    buscarPorPrecio: function(precio){
        let aptosDisponibles = this.departamentosDisponibles();
        return aptosDisponibles.filter(e => e.precioAlquiler <= precio);

    },
    ordenarPorPrecio: function(){
        return this.departamentos.sort((a,b) => a.precioAlquiler - b.precioAlquiler)
    },
    precioConImpuesto: function(incremento){
        return this.departamentos.map(e => e.precioAlquiler * incremento/10 + e.precioAlquiler)
    },
    alquilarDepartamento: function(idApto){
        let deptosDispo = this.buscarPorId(idApto);
        if (departamentos.disponible === true){
            departamentos.disponible = false
            console.log('Alquilado');
        }else if(departamentos.deptosDispo === false){
            console.log('No está disponible');
        }else{
            return 'el id no existe'
        }

        },
        calcularIngreso: function(){
            let alquilados = this.departamentosDisponibles();
            return alquilados.reduce((acum, e) => acum + e.precioAlquiler,0)
        }
}

//console.log(inmobiliaria.buscarPorId(2));

//console.table(inmobiliaria.ordenarPorPrecio())

console.log(inmobiliaria.listarDepartamentos(departamentos));