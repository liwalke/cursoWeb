/**
 * Filter retorna um novo array com os índices que estão dentro da condição passada na callback, ou seja, os índices que retornaram true.
 */

const produtos = [
    {nome: 'Notebook', preco: 2499.00, fragil: true},
    {nome: 'iPad', preco: 4199.00, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]
console.log(produtos)

//Filtrando os produtos caros e frágeis
let resultado = produtos.filter(e => e.fragil).filter(e => e.preco > 2000.00)
console.log(resultado)

//implementando o método filter
Array.prototype.filter2 = function(callback){
    const newArr = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this))
            newArr.push(this[i])   
    }
    return newArr
}

resultado = produtos.filter2(e => e.fragil).filter2(e => e.preco > 2000.00)
console.log('Filter 2:')
console.log(resultado)