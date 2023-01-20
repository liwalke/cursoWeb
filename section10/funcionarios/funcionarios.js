const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const funcMulheresChinesas = obj => {
    if (obj.pais === 'China')
        if (obj.genero === 'F')
            return obj
}
const menorSalario = (acc, curr) => {
    return curr.salario < acc.salario ? curr : acc
}


axios.get(url).then(response => {
    const funcionarios = response.data //Array de objetos
    
    //Desafio - Obter a mulher chinesa com menor salário
    const resultado = funcionarios
        .filter(funcMulheresChinesas)
        .reduce(menorSalario)

    console.log(resultado)
})