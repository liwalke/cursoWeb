// Para voltar a pasta superior a pasta onde está salvo o módulo corrente, deve-se usa a notação ../
// Para voltar duas pastas usar ../../ e assim sucessivamente...

// Nesse exemplo foi voltado duas pastas, até a pasta seccion10 e requisitado  acesso ao módulo 'moduloA'
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// Para acessar um módulo padrão do node só precisa isso:
const http = require('http')

// Para acessar um módulo de uma outra pasta é possível passar o diretório mais o nome do módulo. Ou se o nome do módulo for index.js, basta informar o diretorio que o require buscará o arquivo index.js, conforme exemplo abaixo:
const c = require('./pastaC')
console.log(c.ola)