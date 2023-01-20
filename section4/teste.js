const rl = require("readline-sync")

let valor1 = parseFloat(rl.question("Digite o valor da variável 1: "))
let valor2 = parseFloat(rl.question("Digite o valor da variável 2: "))

console.log('O resultado da soma é: '+(valor1 + valor2))