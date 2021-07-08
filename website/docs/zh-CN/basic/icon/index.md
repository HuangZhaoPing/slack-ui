# Icon 图标

Slack 并不提供内置图标，推荐使用外部导入图标库的方式，这样做的原因是：

- 每个项目可能都有自己的图标库，众口难调，所以将主导权交给用户。
- 很多时候，内置图标可能大部分都用不上，反而增加了代码体积。

基于上述两个问题考虑，所以不提供内置图标。

## 导入图标

Slack 组件以 Font class 的方式使用图标，下面以 [iconfont](https://www.iconfont.cn/) 为例引入图标库。

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
