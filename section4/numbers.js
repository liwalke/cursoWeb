/* ESTRUTURAS DE DADOS:
 *      Pilha - LIFO
 *      Fila - FIFO
 *      Árvores - Organização das pastas
 *      Planilhas - Tabelas de Banco de Dados
 *      Objetos - Clientes, Alunos, Produtos...
 */

/* TIPOS DE VARIÁVEIS - Usar sempre LET
 *      VAR: Permite redeclarar a variável dentro do programa;
 *      LET: Não permite redeclarar;
 *      CONST: Não permite alterar o valor após declarado.
 */


let altura = 1.7323431241
console.log(altura.toFixed(2)) //O parâmetro do método toFixed é o número de casas decimais

let alturaBinarioTexto = altura.toString(2) //Altera para binário
console.log(alturaBinarioTexto)
console.log(typeof alturaBinarioTexto)

let alturaHexaTexto = altura.toString(16) //Altera para hexadecimal
console.log(alturaHexaTexto)
console.log(typeof alturaHexaTexto)

console.log(7 / 0) // Retorna Infinity
console.log("5" + 10) // Executa o cálculo mesmo com String