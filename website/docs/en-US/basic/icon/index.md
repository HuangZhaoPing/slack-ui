# Icon

Slack does not provide built-in icons. We recommend importing the icon library externally for the following reasons:

- With a large number of built-in icons, most of them may not be used, but increase the code volume.
- The built-in icon may not be liked by most users, or does not conform to the style of the project, etc.

Based on the above problems, it is considered not to provide built-in icons and give the dominance to users. Now there are many open source icon libraries, such as [iconfont](https://www.iconfont.cn/)、[fontawesome](http://www.fontawesome.com.cn/) Etc., users can select icons according to their preferences.

## How to use icons

The slack component uses the icon in the form of font class, followed by [iconfont](https://www.iconfont.cn/) As an example, introduce the icon library and use the icon.

Step 1: to facilitate continuous icon management, first create a project in iconfont and add your favorite icons.

Step 2: select font class to import the online icon style file, or download the icon file to the project.

![screenshot1](/assets/images/screenshot1.png)

Method 1: import online icon style file:

```html
<link rel="stylesheet" href="//at.alicdn.com/t/font_2644981_t6ri3ds8wm.css">
```

Method 2: reference local CSS file (HTML method):

```html
<link rel="stylesheet" href="./iconfont.css">
```

Method 3: reference local CSS file (JS method):

```js
import './iconfont.css'
```

Step 3: use.

```html
<!-- Original way -->
<i class="iconfont icon-user">
<!-- Using icon components -->
<s-icon class="iconfont icon-user" />
<!-- Button assembly -->
<s-button icon="iconfont icon-user">Button</s-button>
```

## Basic use

:::demo You can set size, color, rotation and other properties.
basic
:::

## API

### Attributes

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ------- |
| class | Class name of Icon | string | - |
| size | The size of the icon, in CSS units | string | inherit |
| color | Color of icon, in CSS units | string | inherit |
| spin | Turn on rotation animation | boolean | false |
