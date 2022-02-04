// É uma estrutura de valores que não aceita repetição e não possui índice

const melhoresTimesDoMundo = new Set()

melhoresTimesDoMundo.add('Barcelona')
melhoresTimesDoMundo.add('Real Madrid')
melhoresTimesDoMundo.add('Barcelona') //Não será adiocionado por não aceitar repetição
melhoresTimesDoMundo.add('Liverpool')
melhoresTimesDoMundo.add('Grêmio')
melhoresTimesDoMundo.add('Inter')
melhoresTimesDoMundo.delete('Inter')

console.log(melhoresTimesDoMundo.has('Inter'))
console.log(melhoresTimesDoMundo.has('Grêmio'))
console.log(melhoresTimesDoMundo)
console.log(melhoresTimesDoMundo.size)
