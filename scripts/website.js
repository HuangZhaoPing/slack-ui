import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import hljs from 'highlight.js'
import container from 'markdown-it-container'
import fs from 'fs'
import path from 'path'
const { resolve } = require('./utils')

export default defineConfig({
  root: resolve('website'),
  resolve: {
    alias: { '@': resolve('website') }
  },
  build: {
    outDir: '../dist'
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      transforms: {
        after: (code, id) => {
          const scripts = []
          code = code.replace(/<!--\$([a-zA-Z0-9_-]+)\$-->/g, (source, match) => {
            const script = `import ${match} from './demos/${match}.vue'`
            if (!scripts.includes(script)) scripts.push(script)
            const filePath = path.resolve(id, `../demos/${match}.vue`)
            const content = fs.readFileSync(`${filePath}`, 'utf-8')
            return `<div v-show="false" data-source><!--${content}--></div>\n${highlightCode(content, 'html')}`
          })
          if (scripts.length > 0) code = `${code}\n<script setup>\n${scripts.join('\n')}\n</script>\n`
          return code
        }
      },

      markdownItSetup (md) {
        md.options.highlight = (code, language) => {
          if (language && hljs.getLanguage(language)) {
            try {
              return highlightCode(code, language)
            } catch (__) {}
          }
          return `<pre class="hljs"><code>${md.utils.escapeHtml(code)}</code></pre>`
        }

        md.use(container, 'demo', {
          validate: params => params.trim().match(/^demo\s+(.*)$/),
          render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
              const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
              const target = tokens[idx + 2]
              const desc = m && m.length > 1 ? m[1] : ''
              const tagName = target.type === 'inline' ? target.content : ''
              return `<demo-layout><template #component><${tagName} /></template><template #desc>${desc}</template><template #code><!--$${tagName}$--></template>`
            } else {
              return '</demo-layout>'
            }
          }
        })
      }
    })
  ]
})

function highlightCode (code, language) {
  return `<pre v-pre class="hljs"><code>${hljs.highlight(code, { language }).value}</code></pre>`
}
