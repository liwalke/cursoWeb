console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função o this e exports são iguais?')
    console.log(this === exports)
    console.log('Dentro de uma função o this aponta para o global?')
    console.log(this === global)
}

logThis()