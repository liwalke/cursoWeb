/*
 * 1 - Abrir o cmd e instalar o package readline-sync na pasta do projeto. npm install readline-sync + Enter;
 * 2 - Fazer require conforme abaixo e usar o método question para fazer a leitura
 * 3 - O readline-sync só roda no terminal do windows.
*/

const rl = require ('readline-sync')

let numero1 = parseFloat(rl.question("Digite o valor do primeiro número: "))
let numero2 = parseFloat(rl.question("Digite o valor do segundo número: "))

console.log(`\nO resultado é: ${numero1 + numero2}`)