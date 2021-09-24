# Popper

## Basic use

:::demo Set the Popper content for the Popper's slot through name.
basic
:::

## Trigger mode

Popper can be triggered by hover and click. The default is hover.

:::demo Set the trigger method through the trigger property.
trigger
:::

## Display location

You can set the display position of Popper. There are 15 kinds. See the API for details.

:::demo Setting the display position through placement
placement
:::

## Hide arrow

Arrows are displayed by default and can be hidden.

:::demo Set the arrow property to false to hide the arrow.
arrow
:::

## api

### attributes

| Attribute | Description | Type | Optional value | Default |
| ---- | --- | --- | ----- | ----- |
| placement | Where tooltip appears | string | auto/auto-start/auto-end/top/top-start/top-end/bottom/bottom-start/bottom-end/right/right-start/right-end/left/left-start/left-end | bottom |
| arrow | Show arrows | boolean | - | true |
| append-to-body | Whether to mount to the body. If false, mount to the parent element where the action element is located | boolean | - | true |
| popper-class | Add class to Popper | string | - | - |
| show-delay | Display delay time (MS) | number | - | 0 |
| hide-delay | Hide latency (MS) | number | - | 300 |

### events

| Attribute | Description | Params |
| ---- | --- | --- |
| show | Triggered when Popper is displayed | - |
| hide | Popper starts when hidden | - |

### slot

| Name | Description |
| ---- | --- |
| - | The action element must be a component or a DOM |
| popper | popper content |
