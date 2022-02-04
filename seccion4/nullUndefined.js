const a = {nome: 'Juca'}
const b = a // ATRIBUIÇÃO DA REFERÊNCIA. b aponta para o mesmo endereço de a.

console.log(b)
console.log(typeof b)

a.nome = 'Juca Bala' // ATRIBUIÇÃO POR VALOR
console.log(b)
console.log(typeof b)

b.nome = 'Juca Bala Torta'
console.log(a)
console.log(typeof a)

//______________________________________________________

let valor // Não inicilizada. Sem definição do tipo de variável
console.log(valor)

valor = null // Ausência de valor
console.log(valor)

/* Usar a atribuição de null em uma situação onde quer remover
 * um objeto, por exemplo:
 * b = null //b deixa de apontar para o objeto
 * Resumo: Usar null para zerar uma variável com atribuição de referência
 * 
 * 
 * Caso queira zerar uma variável primitiva, por exemplo:
 * let valor = 500
 * É indicado colocar um zero. null não está errado, mas para 
 * padronizar é melhor null para variáveis de atribuição de referência
 * 
 * 
 * Evitar fazer atribuições do tipo undefined, deixar que o compilador
 * faça esse tipo de atribuição.
*/