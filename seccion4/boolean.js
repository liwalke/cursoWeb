let isActive = false
isActive = 1

console.log('Resultados verdadeiros:')
console.log(!!isActive)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))


console.log('Resultados falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = 0))

console.log('Para finalizar:')
console.log(!!('' || null || 0 || ' ')) //Retorna a primeira condição verdadeira

let nome = ''
console.log(nome || 'Desconhecido') //Se o nome estiver vazio, retorna Desconhecido

nome = 'Juca'
console.log(nome || 'Desconhecido') //Retorna 'Juca' pois é a primeira condição verdadeira
