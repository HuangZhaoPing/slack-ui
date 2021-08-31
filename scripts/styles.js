const { src, dest, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')
const { resolve } = require('./utils')

// 清除 lib/styles
function clean (cb) {
  del.sync([resolve('lib/styles')], { force: true })
  cb()
}

function build () {
  return src(resolve('packages/styles/*.scss'))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(dest(resolve('lib/styles/')))
}

exports.default = series(clean, build)
