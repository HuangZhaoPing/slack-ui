import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import vuePlugin from 'rollup-plugin-vue'
// import scss from 'rollup-plugin-scss'
import { resolve } from './utils'
// import scss from './test'

export default {
    input: resolve('packages/button/index.ts'),
    output: {
      file: resolve('lib/button/index.js'),
      format: 'es'
    },
    plugins: [postcss({
      extract: true
    }), typescript(), vuePlugin()]
  }

