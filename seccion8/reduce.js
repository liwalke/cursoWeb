//  O reduce vai retornar (acc, current, index, array) -
//  acc - Pode receber um valor inicial. Após receber o valor inicial, seu valor será o retorno da callback, portanto poderá ser processado de qualquer forma dentro da callback.
//  current - Se o valor inicial for passado para o reduce, current vai começar sendo o valor do primeiro índice, se não o acc vai ser o primeiro índice e current o segundo;
//  index - Número do índice;
//  array - Será sempre o array completo;
//
//  O reduce recebe como parâmetro uma função callback e o valor inicial do accumulador ou somente uma callback. Exemplo 1: reduce(callback, 10), o acumulador começa com 10 e o primeiro retorno de current será o valor do índex 0. Exemplo 2: reduce(callback), o acumulador começa com o valor do índex 0 e o primeiro retorno de current será o valor do índex 1.

const arr = [4, 3, 2, 1]

console.log(arr)
console.log(arr.reduce((acc, curr) => acc + curr)) //Esse é o exemplo mais clássico, onde reduce calcula o total da soma do valor de todos elementos;

console.log(arr.reduce((acc, curr) => acc + curr, 5))//Mesmo função anterior porém com valor inicial em 5.

console.log(arr.reduce((acc, curr) => acc)) //Nesse exemplo o acc recebeu o valor do índice 0 e não sofreu mais nenhuma alteração dentro da callback;

console.log(arr.reduce((acc, curr) => {
    console.log(`${acc} + ${curr} + 3`)
    return acc + curr + 3
}, 5)) //O accc recebe 5 de valor inicial, depois soma com o índice corrente mais 3.


const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]
//console.log(alunos[0].bolsista && alunos[1].bolsista)

//DESAFIO 1 - Todos os alunos são bolsistas?
console.log(alunos.reduce((acc, current) => acc && current.bolsista, true))

//DESAFIO 2 - Algum aluno é bolsista?
console.log(alunos.reduce((acc, current) => acc || current.bolsista, false))

//Implementando o método reduce básico
Array.prototype.reduce2 = function(callback, initialValue){
    let acc, initialCurrIndex
    if (initialValue){
        acc = initialValue
        initialCurrIndex = 0
    }
    else{
        acc = 0
        initialCurrIndex = 1
    }
    for (let i = initialCurrIndex; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }
    return acc
}