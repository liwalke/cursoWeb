const pai = {nome: 'Pedro', corCabelo: 'preto'}

// filha1 vai herdar pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' //Não vai aceitar pq writable está false
console.log(`${filha2.nome} tem cabelo herdado ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //Retorna nome como chave própria
console.log(Object.keys(filha2)) //Retorna nome como chave própria

for (let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`${key} por herança.`)
    //hasOwnProperty() - método que verifica se a propriedade é própria do objeto retorna um boolean
}