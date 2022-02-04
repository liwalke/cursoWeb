// Cadeia de protótipos
Object.prototype.attr0 = '0' //Não recomendado

/**
 * Obs.:
 *      Para atribuir um atributo a uma função deve-se usar o atributo .prototype, por exemplo, Object.prototype.newAttr = 'xx'.
 *      Neste caso, quem recebe o newAttr é a função Object.
 * 
 *      Para atribuir um atributo a um objeto deve-se usar o atributo .__proto__, por exemplo, pai.__proto__.newAttr = 'xx'.
 *      Neste caso, quem recebe o newAttr é o primeiro protótipo da hierarquia superior, seria o avo do pai.
 * 
 * Os atibutos são 
 */

console.log(typeof Object)

const avo = {attr1: '1'}
const pai = {
    __proto__ : avo,
    att2: '2',
    att3: '3'
}
pai.__proto__.attr4 = '4' //Insere o atributo attr4 no protótipo de avo, ou seja, avo passa a ter o atributo attr4

const filho = {
    __proto__ : pai,
    att3: '5'
}

console.log(filho.attr0, filho.attr1, filho.att2, filho.att3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax)
            this.velAtual += delta
        else
            this.velAtual = this.velMax
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //Super - Aponta para o método superior ao 
    }
}

Object.setPrototypeOf(ferrari, carro) //definição da relação de herança carro > ferrari
Object.setPrototypeOf(volvo, carro) //definição da relação de herança carro > volvo

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())
