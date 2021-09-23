# Tooltip

用于展示鼠标 hover 时的效果。

## 基础使用

设置 Tooltip 的内容以及展示方向，提供了 15 种方向，例子只展示其中几种，其余的可查看 api。

::: demo 通过 content 设置 Tooltip 的内容，通过 placement 设置弹出位置。
basic
:::

## 主题

提供了 dark 与 light 两种主题，默认为 dark。

:::demo 通过 theme 设置主题。
theme
:::

## 自定义内容

可通过 slot 自定义内容。

:::demo 可通过 slot 自定义内容。
custom
:::

## api

### attributes

| Attribute | Description | Type | Optional value | Default |
| ---- | --- | --- | ----- | ----- |
| content | Tooltip 内容 | string | - | - |
| placement | Tooltip 出现位置 | string | auto/auto-start/auto-end/top/top-start/top-end/bottom/bottom-start/bottom-end/right/right-start/right-end/left/left-start/left-end | bottom |
| arrow | 是否显示箭头 | boolean | - | true |
| append-to-body | 是否挂载到 body，为 false 时挂载到作用元素所在的父元素中 | boolean | - | true |
| show-delay | 显示延迟时间（毫秒） | number | - | 0 |
| hide-delay | 隐藏延迟时间（毫秒） | number | - | 300 |

### slot

| name | Description |
| ---- | --- |
| - | 作用元素，必须为一个组件或者一个 dom |
| content | Tooltip 内容 |
