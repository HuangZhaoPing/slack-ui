import typescript from '@rollup/plugin-typescript'
import vuePlugin from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import { resolve } from './utils'
// import scss from './test'

export default {
    input: resolve('packages/button/index.ts'),
    output: {
      file: resolve('lib/button/index.js'),
      format: 'es'
    },
    plugins: [scss(), typescript(), vuePlugin()]
  }

