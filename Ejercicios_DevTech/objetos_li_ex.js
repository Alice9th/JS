let cuenta = {
    NumeroDeCuenta: 111,
    Saldo: 10000,
    Titular: 'Fulanito Cosme',
    deposito: function (cantidadDinero){
        this.Saldo += cantidadDinero;
        return 'Depósito realizado exitosamente, su nuevo saldo es ' + (this.Saldo);

    },
    extraccion: function (cantidadDinero_ext){
        if (cantidadDinero_ext > this.Saldo) {
            return 'Fondos Insuficientes'
            
        } else{
            this.Saldo -= cantidadDinero_ext
        }
        return 'Retiro exitoso, su nuevo saldo es ' + (this.Saldo);
    }
}

console.log(cuenta.deposito(5000));
//Creando una función constructora a partir del objeto cuenta:

function Cuenta(numeroDeCuenta, saldo, titular){
    this.numeroDeCuenta = numeroDeCuenta;
    this.saldo = saldo;
    this.titular = titular;
    this.deposito = function(cantidadDinero){
        this.Saldo += cantidadDinero;
        return 'Depósito realizado exitosamente, su nuevo saldo es ' + (this.Saldo);
    }
    this.extraccion = function(cantidadDinero_ext){
        if (cantidadDinero_ext > this.Saldo) {
            return 'Fondos Insuficientes'
            
        } else{
            this.Saldo -= cantidadDinero_ext
        }
        return 'Retiro exitoso, su nuevo saldo es ' + (this.Saldo)
    }

}

let cosmeCuenta = new Cuenta(10117, 5500, 'Cosme Fulanito');
console.log(cosmeCuenta);

//Calculadora de notas

let alumno = {
    nombre: 'Martina',
    numero_legajo: 012,
    lista_notas:[7.5, 8.5, 7.0, 4],
    calcularPromedio: function(){
        let suma = 0
        for (let i = 0; i < this.lista_notas.length; i++) {
            suma += this.lista_notas[i]
    }
    return suma / this.lista_notas.length;
    },
    aprobar: function(input, notaFinal){
        if (notaFinal < input){
            return 'No aprobó';
        }else if (notaFinal >= input){
                return 'Aprobó';
            }
        }
    
};

let nota_final = alumno.calcularPromedio(alumno.lista_notas);
console.log(nota_final);

console.log(alumno.aprobar(7, nota_final));


