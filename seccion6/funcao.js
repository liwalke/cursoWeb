
//Forma literal
function fun1 () { }

//Função anônima armazenada em variável
const fun2 = function() { }

//Função armazenada em um array
const array = [function(a, b) {return a+b}, fun1, fun2]
console.log(array[0](1, 2))

// Função armazenada em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Falando..' }
console.log(obj.falar())

// Função passada como parâmetro de função
function run(fun){
    fun()                       //Aqui acontece a invocação da função passada como parâmetro
}
run(function (){console.log('Executando..')}) //O console.log não será executado aqui

// Função com quantidade de parâmetros variáveis
function soma(){
    let soma = 0
    for (let i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(1.1, 2.2, 5.5))
console.log(soma(1, 2, 'teste'))
console.log(soma('E', 'l', 'i', 'z', 'e', 'u'))