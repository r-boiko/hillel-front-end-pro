const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()

function html() {
  return src('src/*.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'))
}

function scss() {
  return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist'))
}

function js() {
  return src('src/js/*.js')
    .pipe(concat('index.js'))
    .pipe(dest('dist'))
}

function clear() {
  return del('dist')
}

function serve() {
  sync.init({
    server: './dist'
  })

  watch('src/**/*.html', series(html)).on('change', sync.reload)
  watch('src/scss/**/*.scss', series(scss)).on('change', sync.reload)
}


exports.build = series(clear, scss, js, html)
exports.serve = series(clear, scss, html, serve)
exports.clear = clear
exports.scss = scss
