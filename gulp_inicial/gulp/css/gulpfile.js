const {series, parallel} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) //Tranforma os arquivos para css e trata o erro caso ocorra
        .pipe(uglifycss({ "uglyComments": true })) //Minifica os arquivos
        .pipe(concat('estilo.min.css')) //Transforma e um único arquivo
        .pipe(gulp.dest('build/css')) //E salva
}
function copiarHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)