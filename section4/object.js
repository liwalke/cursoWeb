let prod1 = {
    id: 1,
    descricao: "Refrigerante"
}

prod1.preco = 6.5
prod1.quantidadeEstoque = 114

console.log(prod1)

//Bloco de código com adição de método dentro do objeto Number
{
    Number.prototype.entre = function (min, max) {
        return this >= min && this <= max
    }

    let valor = 10
    console.log(valor.entre(0, 5))
    console.log(valor.entre(0, 100))
}