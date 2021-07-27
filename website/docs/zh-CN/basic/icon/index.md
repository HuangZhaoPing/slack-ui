# Icon 图标

Slack 并不提供内置图标，我们推荐使用外部导入图标库的方式，这样做的原因是：

- 内置大量图标，有可能大部分都用不上，反而增加了代码体积。
- 众口难调，内置的图标有可能大部分用户不喜欢，或者不符合项目的风格等等。

基于上述问题考虑不提供内置图标，将主导权交给用户，现在有很多开源的图标库，如 [iconfont](https://www.iconfont.cn/)、[fontawesome](http://www.fontawesome.com.cn/) 等，用户可根据自己的喜好选择图标。

## 如何使用图标

Slack 组件以 Font class 的方式使用图标，下面以 [iconfont](https://www.iconfont.cn/) 为例引入图标库并使用图标。

第一步：为了方便持续管理图标，先在 iconfont 中创建项目，并添加自己喜欢的图标。

第二步：选择 Font class，引入线上图标样式文件，或者下载图标文件到项目中引入。

![screenshot1](/assets/images/screenshot1.png)

方式一：引入线上图标样式文件：

```html
<link rel="stylesheet" href="//at.alicdn.com/t/font_2644981_t6ri3ds8wm.css">
```

方式二：引用本地 css 文件（html 方式）：

```html
<link rel="stylesheet" href="./iconfont.css">
```

方式三：引用本地 css 文件（js 方式）：

```js
import './iconfont.css'
```

第三步：使用。

```html
<!-- 原始方式 -->
<i class="iconfont icon-user">
<!-- 使用 icon 组件 -->
<s-icon class="iconfont icon-user" />
<!-- 按钮组件 -->
<s-button icon="iconfont icon-user">按钮</s-button>
```

## 基本使用

:::demo 可以设置大小，颜色，旋转等属性。
basic
:::

## API

### Attributes

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ------- |
| class | icon 的类名 | string | - |
| size | icon 的大小，使用 css 单位 | string | inherit |
| color | icon 的颜色，使用 css 单位 | string | inherit |
| spin | 开启旋转动画 | boolean | false |
