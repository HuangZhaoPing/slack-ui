# Icon 图标

Slack 并不提供内置图标，我们推荐使用外部导入图标库的方式，这样做的原因是：

- 内置大量图标，有可能大部分都用不上，反而增加了代码体积。
- 众口难调，内置的图标有可能大部分用户不喜欢，或者不符合项目的风格等等。

基于上述问题考虑不提供内置图标，将主导权交给用户，现在有很多开源的图标库，如 [iconfont](https://www.iconfont.cn/)、[fontawesome](http://www.fontawesome.com.cn/) 等，用户可根据自己的喜好选择图标。

## 如何使用图标

Slack 组件以 Font class 的方式使用图标，比如：

```html
<i class="iconfont icon-check-circle"></i>
<!-- 为 button 添加图标 -->
<s-button icon="iconfont icon-check-circle">按钮</s-button>
```

下面以 [iconfont](https://www.iconfont.cn/) 为例引入图标库并使用图标。

第一步：为了方便持续管理图标，先在 iconfont 中创建项目。

![screenshot1](/assets/images/screenshot1.jpg)

第二步：到图标库中选择要导入的图标，这里选择了 antd 的官方图标库。

![screenshot2](/assets/images/screenshot2.jpg)

第三步：将图标加入到购物车，这里为了方便测试，只选择了 3 个。

![screenshot3](/assets/images/screenshot3.jpg)

第四步：打开购物车，点击添加至项目，选择刚刚创建的项目。

![screenshot4](/assets/images/screenshot4.jpg)

第五步：选择 Font class，然后生成在线链接或者下载到本地，这里选择在线链接。

![screenshot5](/assets/images/screenshot5.jpg)

第六步：将链接添加到 index.html 中，如果采用下载到本地的方式，则引入本地 css 文件：

```html
<link rel="stylesheet" href="//at.alicdn.com/t/font_2644981_t6ri3ds8wm.css">
```

第七步：使用图标。

```html
<i class="iconfont icon-check-circle"></i>

<s-button icon="iconfont icon-check-circle">按钮</s-button>
```
