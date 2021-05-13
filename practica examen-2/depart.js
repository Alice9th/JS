const fs = require('fs')
let departamentosJSON = fs.readFileSync('./departamentos.json', 'UTF-8')
let departamentos = JSON.parse(departamentosJSON)

//Crear un objeto literal que represente la inmobiliaria
let inmobiliaria = {
    departamentos: departamentos,

/*Agregar un método departamentosDisponibles que permita consultar
disponibilidad, es decir, que devuelva una lista de los departamentos
disponibles.*/
departamentosDisponibles : function () {
  return  this.departamentos.filter(e => e.disponible === true)    
},
/*Agregar un método listarDepartamentos que reciba como parámetro un
array de departamentos y los imprima por consola.
Este método deberá imprimir por cada elemento:
○ El id.
3○ El precio.
○ disponible (en caso de ser true mostrar “Disponible” caso contrario
“Alquilado”)*/
listarDepartamentos: function (buscar) {
    let disponibilidad = this.departamentos.disponible ? "Disponible" : "Alquilado" // esto reemplazz true y false
    
    
    
  
    
},
/*Agregar un método buscarPorId que permita buscar él departamento en
función de su identificador.
○ Este método debe devolver un departamento en caso de encontrar
el identificador.*/
buscarPorId:function (buscarIdentificador) {
    return this.departamentos.find( e=> e.id === buscarIdentificador )
    
    
},
/*Agregar un método buscarPorPrecio que permita filtrar los
departamentos disponibles, siempre y cuando el precio sea menor o igual
al precio enviado como argumento.
○ Este método debe usar departamentosDiponibles.
○ Este método debe devolver una lista de departamentos.*/

buscarPorPrecio:function (depaPrecio ) {
    let disponibles = this.departamentosDisponibles();/*aqui creo una variable para para poderla meter abajo*/
    return disponibles.filter(e=> e.precioAlquiler <= depaPrecio)
    
    
},

/*Agregar un método que permita ordenar por precio de menor a mayor
según él precioAlquiler y devolverlo.*/
 
ordenarPrecio: function () {
    return this.departamentos.sort((a,b)=> a.precioAlquiler - b.precioAlquiler)
    
},

/*Agregar un método precioConImpuesto que permita realizar un
incremento del precioAlquiler a todos los departamentos, tanto
disponibles como no disponibles, según un porcentaje que se envía como
argumento al momento de la invocación del método.
ejemplo : PrecioConImpuesto(10), deberá incrementar el precioAlquiler de
Todos los departamentos un 10%*/

precioConImpuesto:function (incremento) {
    return this.departamentos.map(e =>e.precioAlquiler*incremento/100 + e.precioAlquiler)
    
},

/*Agregar un método que permita alquilar un departamento.
○ Este método recibe por parámetro el id del departamento y
actualiza la propiedad del departamento en false 
 esperado: que quede actualizada la propiedad departamentos
de la inmobiliaria, donde el departamento que alquilo no está disponible*/

IdDelDepartamento: function (id) {
    let apartamento  = this.buscarPorId(id);
   if (apartamento.disponible === true) {
       apartamento.disponible = false
       console.log('Alquilado');   
   }
   else if (apartamento.disponible === false) {
       console.log('No esta disponible');
       
   }else{
       return 'id invalido'
   }
    
}




}
console.log(inmobiliaria.IdDelDepartamento(2))