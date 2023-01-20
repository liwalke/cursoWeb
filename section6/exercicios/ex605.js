let valor1 = 0.1
let valor2 = 0.2

console.log(valor1 + valor2)

console.log((valor1 + valor2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})) //R$ XX,XX