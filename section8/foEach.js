/*
    Percorre o array e chama a callBack para cada elemento passando 3 parâmetros. O primeiro é o conteúdo,
o segundo é o índice e o terceiro é o próprio array completo.
    O forEach atua sobre o array original, podendo alterá-lo
*/

const aprovados = ['Rafa', 'Ana', 'Bia', 'Ju', 'Dedé', 'Didi']

//Exemplo 1 - Usa os dois parâmetros retornados chamando uma função anônima
aprovados.forEach(function (nome, indice){
    console.log(`${indice}) ${nome}`)
})

//Exemplo 2 - Usa somente o nome, primeiro parâmetro, chamando uma arrow function
aprovados.forEach(nome => console.log(nome))

//Exemplo 3 - Armazenando uma função em uma variável e passar como parâmetro ao forEach
const exibirAprovados = nome => console.log(nome)
aprovados.forEach(exibirAprovados)

//Exemplo 4 - Usando o terceiro retorno que é o array completo
aprovados.forEach(function (nome, indice, array){
    console.log(`${indice}- ${nome}`)
    console.log(array)
})

//Exemplo 5 - Implementando o método forEach2() no prototype de Array para entender como funciona por dentro
Array.prototype.forEach2 = function(funcao){
    for (let i = 0; i < this.length; i++){
        funcao(this[i], i, this)
    }
}

aprovados.forEach2(function (nome, indice, arr){
    console.log(`${indice}) ${nome}`)
    console.log(arr)
})
