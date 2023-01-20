const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

//Percorre o arrar e retorna o valor do índice quando for um array.
//Não é indicado para array pq array possui métodos próprios mais interessantes
for (let i in notas){
    console.log(`[${i}] = ${notas[i]}`)
}

const pessoa = {
    nome: 'Elizeu',
    sobrenome: 'Walker Brizolla',
    idade: 29,
    peso: 70.4
}

//Percorre o objeto e retorna o atributo
for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}