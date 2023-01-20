//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas a função

//Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

function minhaBiblioteca (){
    function auxiliar(valor){ //A função auxiliar é privada neste caso
        return 10 + valor
    }
    return { //Tudo que estiver dentro do objeto de retorno será público
        add5(){
            return auxiliar(5)
        },
        add7(){
            return auxiliar(7)
        }
    }    
}

const biblioteca = minhaBiblioteca()
console.log(biblioteca)

console.log(biblioteca.add5())
console.log(biblioteca.add7())