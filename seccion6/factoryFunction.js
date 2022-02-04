//Factory retorna um novo objeto
//Não é uma classe
//Não é um construtor - construtor usa o new...
//Tudo que está dentro do objeto returnado será público (atributos e métodos)
//Tudo que não estiver dentro objeto retornado será privado/clousured

function criarProduto (nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

const refrigerante = criarProduto('Pepsi', 6.99)
console.log(refrigerante)
console.log(refrigerante.nome)