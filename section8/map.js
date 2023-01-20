/*
    Percorre o this e chama a callBack para cada elemento passando 3 parâmetros. O primeiro é o conteúdo,
o segundo é o índice e o terceiro é o próprio this completo.
    O map retorna um novo this com o processamento da callback, sem alterar o this orignal.
*/

const nums = [1, 2, 3, 4, 5]

//Exemplo 1: Aplicação simples
let resultado = nums.map(e => e*2)
console.log(resultado)

//Exemplo 2: Encadeamento de maps
const sum10 = e => e + 10
const triple = e => e * 3
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` /*Passa para float, determina 2 casas
decimais e troca . por ,*/

resultado = nums.map(sum10).map(triple).map(toMoney) /*Somou 10, depois multiplicou por 3, depois converteu
para reais e salvou em resultado*/
console.log(resultado)

//DESAFIO - RETORNAR UM ARRAY APENAS COM OS PREÇOS
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

let precos = carrinho.map(e => JSON.parse(e)).map(obj => obj.preco)
console.log(precos)

//IMPLEMENTAÇÃO DA MINHA VERSÃO DO MAP S2
Array.prototype.map2 = function(callback){
    const newArr = []
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this))
    }
    return newArr
}

precos = carrinho.map2(e => JSON.parse(e)).map(obj => obj.nome) //Repare que nessa linha tem o map2 e o map original, ambos com a mesma funcionalidade.
console.log(precos)