# Popper

## 基础使用

:::demo 通过 name 为 popper 的 slot 设置 popper 内容。
basic
:::

## 触发方式

popper 有 hover 与 click 触发方式，默认为 hover。

:::demo 通过 trigger 属性设置触发方式。
trigger
:::

## 显示位置

可设置 popper 的显示位置，有 15 种，详看 api。

:::demo 通过 placement 设置显示位置
placement
:::

## 隐藏箭头

箭头默认显示，可隐藏。

:::demo 将 arrow 属性设置为 false 即可隐藏箭头。
arrow
:::

## api

### attributes

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| ---- | --- | --- | ----- | ----- |
| placement | Tooltip 出现位置 | string | auto/auto-start/auto-end/top/top-start/top-end/bottom/bottom-start/bottom-end/right/right-start/right-end/left/left-start/left-end | bottom |
| arrow | 是否显示箭头 | boolean | - | true |
| append-to-body | 是否挂载到 body，为 false 时挂载到作用元素所在的父元素中 | boolean | - | true |
| show-delay | 显示延迟时间（毫秒） | number | - | 0 |
| hide-delay | 隐藏延迟时间（毫秒） | number | - | 300 |

### slot

| name | 描述 |
| ---- | --- |
| - | 作用元素，必须为一个组件或者一个 dom |
| popper | popper 内容 |
