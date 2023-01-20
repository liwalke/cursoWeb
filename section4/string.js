/*
 * Pode ser entre aspas simples 'xxx' ou aspas duplas "yyy"
 * 
 */

let nome = 'Juca'

console.log(nome.charAt(2)) // Retorna o caracter do índice [2] = 'c'
console.log(nome.charCodeAt(0)) // Retorna o código da tabela ascii do caracter do índice [0]
console.log(nome.indexOf('a')) // Retorna o índice do caracter 'a' = 3
console.log(nome.substring(1)) // Retorna uma substring começando pelo caracter do índice [1] = uca
console.log(nome.substring(2, 4)) // Retorna uma substring com os caracteres entre os índices [2] e [4] = ca

//TEMPLATE STRING

let idade = 10
console.log(`Nome: ${nome}\nIdade: ${idade}`) // `xxx ${variável} yyy ${variável}`

console.log(
`Nome: ${nome}
Idade: ${idade}`) 