// Função sem retorno
function imprimirSoma (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7, 8)
imprimirSoma()

// Função com retorno
// Segundo parêmetro com valor padrão
function soma (a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())


// Armazenando uma função em uma variável
const imprimirSoma2 = function (a, b){
    console.log(a + b)
}

imprimirSoma2(2, 3)

// Armazenando uma arrow function em uma variável
const soma2 = (a, b) => {
    return a + b
}


// Arrow function com retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))


// Arrow function com somente um parâmetro não precisa parênteses
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')


// Arrow function sem parâmetros
let randomNumber = () => Math.random

