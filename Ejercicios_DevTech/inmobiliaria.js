const fs = require('fs')
let departamentosJSON = fs.readFileSync('./departamentos.json', 'UTF-8')
let departamentos = JSON.parse(departamentosJSON)

//Verificar:


console.log(departamentos);




//Llamando la info:



