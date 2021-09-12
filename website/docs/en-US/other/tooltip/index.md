# Tooltip

Used to show the effect of mouse hover.

## Basic use

Set the content and display direction of the tooltip. 15 directions are provided. Examples show only a few of them, and the rest can be viewed.

::: demo Set the content of the tooltip through content, and set the pop-up position through placement.
basic
:::

## Theme

Two themes, dark and light, are provided. The default is dark.

:::demo Set the theme through theme.
theme
:::

## Custom content

You can customize the content through slot.

:::demo You can customize the content through slot.
custom
:::

## api

### attributes

| Attribute | Describe | Type | Optional value | Default |
| ---- | --- | --- | ----- | ----- |
| content | Tooltip Content | string | - | - |
| placement | Where tooltip appears | string | auto/auto-start/auto-end/top/top-start/top-end/bottom/bottom-start/bottom-end/right/right-start/right-end/left/left-start/left-end | bottom |
| arrow | Show arrows | boolean | - | true |
| append-to-body | Whether to mount to the body. If false, mount to the parent element where the action element is located | boolean | - | true |
| show-delay | Display delay time (MS) | number | - | 0 |
| hide-delay | Hide latency (MS) | number | - | 300 |

### slot

| Name | Describe |
| ---- | --- |
| - | The action element must be a component or a DOM |
| content | Tooltip content |
