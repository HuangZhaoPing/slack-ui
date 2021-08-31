import typescript from 'rollup-plugin-typescript2'
import vuePlugin from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name, version } from '../package.json'

function mergeConfig (config) {
  return {
    format: 'umd',
    name: name.toUpperCase(),
    banner: `/* version: ${version} */`,
    exports: 'named',
    globals: {
      vue: 'Vue'
    },
    ...config
  }
}

export default {
  input: 'packages/index.ts',
  output: [
    mergeConfig({ file: 'lib/index.umd.js' }),
    mergeConfig({
      file: 'lib/index.umd.min.js',
      plugins: [
        terser({
          output: {
            comments: (node, comment) => {
              return /version/.test(comment.value)
            }
          }
        })
      ]
    })
  ],
  plugins: [
    typescript(),
    vuePlugin(),
    // 默认打包文件不包含外部依赖（如：vue），添加此插件可将没添加至 external 的外部依赖打包
    nodeResolve()
  ],
  external: ['vue']
}
