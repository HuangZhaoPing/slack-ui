import fs from 'fs'
import typescript from '@rollup/plugin-typescript'
import vuePlugin from 'rollup-plugin-vue'
const { resolve } = require('./utils')

const exclude = ['styles']

const config = fs.readdirSync(resolve('packages')).filter(name => !exclude.includes(name)).map(name => {
  const isMain = name === 'index.ts'
  return {
    input: isMain ? 'packages/index.ts' : `packages/${name}/index.ts`,
    output: {
      file: isMain ? 'lib/index.es.js' : `lib/${name}/index.js`,
      format: 'es',
      globals: {
        vue: 'Vue'
      }
    },
    plugins: [
      typescript({ target: 'es5' }),
      vuePlugin()
    ],
    external: ['vue']
  }
})

export default config
