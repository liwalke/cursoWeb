//É tudo igual, é um objeto e começa vazio
// console.log(module.exports)
// console.log(this)
// console.log(this === module.exports)

//Primeira forma de atribuir ao objeto global desse módulo (significa que é global somente nesse módulo)
this.ola = 'Fala Pessoal'
// console.log(this)

//Segunda forma
exports.bemVindo = 'Bem vindo ao node!'
// console.log(module.exports)

//Terceira forma
module.exports.ateLogo = 'Até próximo exemplo'
// console.log(this)