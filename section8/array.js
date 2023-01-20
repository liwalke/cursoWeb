// .push() - Adiciona elemento na última posição
// .pop() - Remove o elemento da última posição
// .shift() - Remove o elemento da primeira posição
// .unshift() - Adiciona elemento na primeira posição
// .splice() - Adiciona ou remove em qualquer posição. Exemplo: .splice(2, 0, 'a', 'b') - A partir do índice 2 
//     (1º parâmetro) removerá 0 elementos (2º parâmetro), e insere os elementos 'a' e 'b' (3º parâmetro em 
//     diante).
// .slice() - Retorna um array com a fatia passada por parâmetro. Exemplo: .slice(2, 4) - Remove os elementos
//      de índice 2 e 3. Não altera o array original

const arr1 = [0, 1, 2, 3, 4, 5]
arr1.push(6)
console.log('Push ' + arr1)

arr1.pop()
console.log('Pop ' + arr1)

arr1.shift()
console.log('Shift ' + arr1)

arr1.unshift(0)
console.log('Unshift '+ arr1)

arr1.splice(1, 1) //A partir do índice 1 (1º parâmetro) removerá 1 elemento (2º parãmetro)
console.log('Splice ' + arr1)

const arr2 = arr1.slice(2, 4)
console.log('Slice Original ' + arr1)
console.log('Slice Novo ' + arr2)