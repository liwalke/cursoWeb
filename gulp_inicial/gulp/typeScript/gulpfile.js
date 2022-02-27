const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src() //Dentro do arquivo tsconfig.json está contido o diretório do código fonte
        .pipe(tsProject()) //O prórpio tsProject faz a compilação para js
        .pipe(gulp.dest('build')) //Por fim, cria a pasta build e salva o arquivo lá
}

exports.default = series(transformacaoTS)