const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //Não transfirará os comentátios para o arquivo final
            presets: ['env'] //Converte todas as últimas atualização do ecma para uma versão mais compatível
        }))
        .pipe(uglify()) //Minifica o código dos arquivos
        .on('error', err => console.error(err))
        .pipe(concat('app.min.js')) //Gera o arquivo app.min.js com o conteúdo de todos arquivos do pipe anterior
        .pipe(gulp.dest('build')) //Cria a pasta gulp e joga o arquivo lá.

    return cb()
}

exports.default = series(padrao)