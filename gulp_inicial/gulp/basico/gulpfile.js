const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copy(cb){
    gulp.src('pastaA/**/*.txt') //Define que todos arquivos txt dentro de pastaA e suas subpastas serão de origem
        // .pipe(imagemPelaMetade()) //Com o pipe é possível fazer uma transformação nos arquivos de origem/entrada no workflow
        // .pipe(imagemEmPretoEBranco()) //Nova transformação...
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB')) //Define o destino dos arquivos, nesse caso será criado uma nova pasta
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copy,
    fim
)