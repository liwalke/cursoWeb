// Representa o sucesso ou falha de uma operação assíncrona

//Essa função retorna uma promessa. Depois da contagem do tempo vai executar resolve() que indica que foi concluída ou reject() que inidica falha
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

//Quando a promise teve sucesso (resolve() for executado na promisse) o método then() é executado. Caso ocorra erro (reject() for executado), é executado o catch().
//Tanto resolve quanto reject retornam somente um parâmetro, logo a callback do then e catch devem ter somente um parâmetro. Se quiser mais dados deve retornar um objeto com vários atributos ou array com vários indíces.
//Then e Catch recebem uma callback que terá somente um parâmetro que veio da promisse
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('!!'))
    .then(outraFrase => console.log(outraFrase)) // Encadeamento de callbacks
    .catch()