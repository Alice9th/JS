const fs = require('fs')
let departamentosJSON = fs.readFileSync('./departamentos.json', 'UTF-8')
let departamentos = JSON.parse(departamentosJSON)/*nos trae el objeto en este caso es un array*/

console.log(departamentos);