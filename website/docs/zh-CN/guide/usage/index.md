# 使用

## 完整引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import 'slack-ui/lib/styles/index.css'
import SlackUI from 'slack-ui'

const app = createApp(App)

app.use(SlackUI)

app.mount('#app')
```

## 按需引入

先安装 [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)。

```shell
npm i babel-plugin-import -D
```

配置 babel.config.js。

```js
plugins: [
  [
    'import',
    {
      libraryName: 'slack-ui',
      customStyleName: (name) => {
        return `slack-ui/lib/styles/${name}.css`;
      }
    }
  ]
]
```

引入需要的组件。

```js
import { createApp } from 'vue'
import App from './App.vue'
import { Button, Select } from 'slack-ui'

const app = createApp(App)

app.use(Button)
app.use(Select)

app.mount('#app')
```
