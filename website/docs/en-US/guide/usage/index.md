# Usage

## Complete introduction

```js
import { createApp } from 'vue'
import App from './App.vue'
import 'slack-ui/lib/styles/index.css' // Import Style
import SlackUI from 'slack-ui' // Import component

const app = createApp(App)
app.use(SlackUI)
app.mount('#app')
```

## On demand import

Install [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)。

```shell
npm i babel-plugin-import -D
```

Configure babel.config.js。

```js
plugins: [
  [
    'import',
    {
      libraryName: 'slack-ui',
      customStyleName: name => `slack-ui/lib/styles/${name}.css`
    }
  ]
]
```

Introduce required components.

```js
import { createApp } from 'vue'
import App from './App.vue'
import { Button, Select } from 'slack-ui'

const app = createApp(App)
app.use(Button)
app.use(Select)
app.mount('#app')
```
