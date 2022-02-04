// rest - Juntar
// spread - espalhar

// spread pode ser usado para copiar atributos de uma função
// Se for feito uma atribuição direta, const clone = funcionario, estará copiando a referencia, vai dar merda..
const funcionario = { nome: 'Maria', salario: '10350.00' }
const clone = {...funcionario}

clone.nome = 'Juca'

console.log(funcionario)
console.log(clone)

//________________________________________________
// Spread com array
const grupoA = ['João', 'Juca', 'Joana']
const grupoFinal = ['Ismael', ...grupoA, 'Kaio']
console.log(grupoFinal)

//_______________________________________________
// Rest
const soma = (...numeros) => {
    let acc = 0
    numeros.map(num => acc += num)
    return acc
}

console.log(soma(2, 3, 4, 5, 6))