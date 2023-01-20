const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//Síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8') //Se o arquivo for muito grande, trava o event loop
console.log(conteudo)

//Assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log('Leitura assíncrona: ')
    console.log(`${config.db.host}:${config.db.port}`)
})

//Sincrona - Arquivos JSON tem essa opção para leitura:
const config = require('./arquivo.json')
console.log(config)

//Leitura de pastas - retorna um array com todos arquivos da pasta.
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta:')
    console.log(arquivos)
})