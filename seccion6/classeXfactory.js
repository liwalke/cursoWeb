//Classe - Atenção que o this varia de acordo com o contexto.
//Classes não são hoisted, ou seja, precisam serem definidas antes de instanciadas
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Mário')
p1.falar()


//Factoty - Usando uma arrow function, não varia o this
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('João')
p2.falar()


//Função contrutora
function pessoa (nome){
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new pessoa('José')
p3.falar()