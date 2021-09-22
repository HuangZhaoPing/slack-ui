# Link 链接

超链接组件，用于表示超链接，相当于 a 标签。

## 基础使用

和按钮一样，有多种样式。

:::demo 通过 type 设置样式，默认为 default。
basic
:::

## 禁用状态

禁用后，会阻止 a 标签默认行为和点击事件冒泡。

:::demo 通过 disabled 设置禁用状态。
disabled
:::

## 下划线

通过 underline 设置是否需要下划线。

:::demo
underline
:::

## API

### Attributes

| Attribute | Description | Type | Optional value | Default |
| ---- | --- | --- | ----- | ----- |
| type | 链接类型 | string | default/primary/success/danger | default |
| disabled | 是否为禁用状态 | boolean | - | false |
| underline | 是否显示下划线 | boolean | - | true |
