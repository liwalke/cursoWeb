// promisse
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado)) // Esse será o retorno caso ok
                } catch (e) {
                    reject(e) // Esse será o retorno caso nok
                }
            })
        })
    })
}

let obterAlunos = async () => {
    const turmaA = await getTurma('A') // Aguarda a conclusão da execução da promise para seguir para a próxima
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto async function sendo possível usar o método then

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

console.log('Depois do chamada da função')

// Pelo que entendi sobre async Await, é possível fazer um encademento de requisições dentro dela. Dentro da função o comportamento das requisições será como se fosse síncrono pois o retorno só acontece após todas as requisições forem concluídas. O await faz com que uma requisição fique "travando" a varredura até que seja retornada, ou seja, se for chamado mais de uma promise com o Await todas serão executadas como se fossem síncronas. Já a execução da funcão async será assíncrona.