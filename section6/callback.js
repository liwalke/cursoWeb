//A função callback recebe uma função como parâmetro e a cada
//determinado evento, executa a função passada como parâmetro

const fabricantes = ['Mercedes', 'BMW', 'Audi']

function imprimir (nome, indice){
    console.log(`${indice}- ${nome}`)
}

fabricantes.forEach(imprimir) //Aqui temos uma callback - recebe uma função e a executa após o retorno
fabricantes.forEach( fabricante => console.log(fabricante)) //Callback com uma arrow funtion

//_______________________________________________________________

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7)
        notasBaixas1.push(notas[i])
}
console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function(nota){return nota < 7})
console.log(notasBaixas2)

// Com callback e arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)