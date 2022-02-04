const anonimo = process.argv.indexOf('-a') !== -1 // Verifica se foi inserido a flag -a. Ex.: node IO-process.js -a

if(anonimo){
    process.stdout.write('Fala anônimo!\n')
    process.exit() //Finaliza o processo
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '') //O replace serve para trocar o enter do usuário por um espaço em branco

        process.stdout.write(`Fala ${nome}\r\n`)
        process.exit()
    })
}