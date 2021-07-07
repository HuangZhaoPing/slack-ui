const fs = require('fs')
const path = require('path')
const { parse } = require('@vue/compiler-sfc')
const sass = require('sass')
const babel = require('@babel/core')
const mkdirp = require('mkdirp')

function startParse (value) {
  fs.readdirSync(value).forEach(item => {
    const filepath = path.resolve(value, item)
    const state = fs.statSync(filepath)
    if (state.isDirectory()) startParse(filepath)
    if (state.isFile()) {
      let output = filepath.replace('packages', 'lib')
      let result = fs.readFileSync(filepath, 'utf-8')
      const extname = path.extname(filepath)
      const dirname = path.dirname(output)
      if (extname === '.ts') {
        result = parseScript(result)
        output = output.replace(/.ts$/, '.js')
      }
      if (extname === '.scss') {
        result = parseStyle(result)
        output = output.replace(/.scss$/, '.css')
      }
      if (extname === '.vue') {
        result = parseVue(result)
      }
      mkdirp(dirname).then(() => {
        fs.writeFileSync(output, result)
      })
    }
  })
}

function parseScript (data) {
  return babel.transformSync(data, { plugins: ['@babel/plugin-transform-typescript'] }).code.replace('.scss', '.css')
}

function parseStyle (data) {
  return sass.renderSync({ data }).css.toString()
}

function parseVue (data) {
  const script = parse(data).descriptor.script
  return data.replace(/<script[\s\S]+>[\s\S]+<\/script>/, script && `<script>\n${parseScript(script.content)}\n</script>`)
}

startParse(path.resolve(__dirname, '../packages'), path.resolve(__dirname, '../lib'))
