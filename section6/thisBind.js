//O maldito this varia de acordo com o contexto de chamada

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar1 = pessoa.falar
falar1()

const falar2 = pessoa.falar.bind(pessoa)
falar2()

//____________________________________________________________________
//Como mater o this apontando para o objeto:

// Ex 1 - Usando o bind
function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa

//Ex 2 - Salvando o this em self no momento de instância da função.
function Pessoa2(){
    this.idade = 0

    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa2

//Ex 03 - O this da arrow function é do contexto léxico da ecrita, ou seja, dentro da função Pessoa3
function Pessoa3() {
    this.idade = 0

    setInterval(() => {
        this.idade ++
        console.log(this.idade)
    }, 1000)
}

new Pessoa3