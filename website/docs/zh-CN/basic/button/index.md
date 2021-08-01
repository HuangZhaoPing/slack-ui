# Button 按钮

按钮组件，响应点击事件。

## 按需引入

按需引入组件。

```js
import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'slack-ui'

const app = createApp(App)

app.use(Button)
```

如果要使用按钮组功能，还需导入按钮组组件。

```js
import { ButtonGroup } from 'slack-ui'

app.use(ButtonGroup)
```

## 基础使用

按钮拥有默认、主要、成功、危险、文字五种样式，可以通过换肤功能替换颜色。

::: demo 通过 type 属性区分，默认为 default。
basic
:::

## 禁用状态

禁用后，不可点击。

::: demo 通过 disabled 属性将按钮设置为禁用状态。
disabled
:::

## 按钮大小

按钮有小（small）、中（medium）、大（large）三种尺寸。

::: demo 通过 size 属性设置按钮尺寸，默认为 medium。
size
:::

## 图标

为按钮添加图标，需要导入图标库。

::: demo 通过 icon 属性设置图标。
icon
:::

设置 icon 的显示位置，左边或右边。

::: demo 通过 icon-position 属性设置 icon 的显示位置，默认为左边。
icon2
:::

## 圆形按钮

圆形按钮，一般配合图标及单个文字使用。

::: demo 通过 round 属性将按钮设置为圆形。
round
:::

## 块级按钮

块级按钮，占满一行。

::: demo 通过 block 属性设置为块级按钮。
block
:::

## 加载效果

加载效果，不可点击，防止多次提交。

::: demo 通过 loading 设置加载效果
loading
:::

## 按钮组

按钮组用于多个按钮组合。

::: demo 通过 button-group 组件包裹 button，实现多个按钮组合。
group
:::

## API

### Attributes

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| ---- | --- | --- | ----- | ----- |
| type | 按钮类型 | string | default/primary/success/danger/text | default |
| disabled | 是否为禁用状态 | boolean | - | false |
| loading | 是否为加载状态 | string | - | false |
| size | 按钮大小 | string | small/medium/large | medium |
| icon | 图标，需要自行引入图标库 | string | - | - |
| round | 是否为圆形按钮 | boolean | - | false |
| block | 是否为块级按钮 | boolean | - | false |
