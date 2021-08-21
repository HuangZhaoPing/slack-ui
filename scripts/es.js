import fs from 'fs'
import typescript from 'rollup-plugin-typescript2'
import vuePlugin from 'rollup-plugin-vue'
const { resolve } = require('./utils')

const exclude = ['styles']

const config = fs.readdirSync(resolve('packages')).filter(name => !exclude.includes(name)).map(name => {
  let input = `packages/${name}/index.ts`
  let file = `lib/${name}/index.js`
  if (name === 'index.ts') {
    input = 'packages/index.ts'
    file = 'lib/index.es.js'
  }
  return {
    input,
    output: {
      file,
      format: 'es',
      globals: {
        vue: 'Vue'
      }
    },
    plugins: [
      typescript(),
      vuePlugin()
    ],
    external: ['vue']
  }
})

export default config
