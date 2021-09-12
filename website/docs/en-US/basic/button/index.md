# Button

Button component to respond to click events.

## On demand import

Introduce components as needed.

```js
import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'slack-ui'

const app = createApp(App)

app.use(Button)
```

If you want to use the button group function, you also need to import the button group components.

```js
import { ButtonGroup } from 'slack-ui'

app.use(ButtonGroup)
```

## Basic use

The button has five styles: default, main, success, danger and text. You can replace the color through the skin change function.

::: demo It is distinguished by the type attribute. The default is default.
basic
:::

## Disabled status

When disabled, it cannot be clicked.

::: demo Set the button to disabled through the disabled property.
disabled
:::

## Button size

Buttons are available in three sizes: small, medium and large.

::: demo Set the button size through the size attribute. The default is medium.
size
:::

## Icon

To add an icon to a button, you need to import the icon library.

::: demo Set the icon through the icon property.
icon
:::

Set the display position of icon, left or right.

::: demo Set the display position of the icon through the icon position property. The default is the left.
icon2
:::

## Round button

Circular buttons are generally used with icons and single text.

::: demo Set the button to circular through the round property.
round
:::

## Block level button

Block level button, occupying a full line.

::: demo Set as a block level button through the block attribute.
block
:::

## Loading effect

Loading effect, can not be clicked to prevent multiple submissions.

::: demo Setting the loading effect through loading.
loading
:::

## Button group

Button groups are used for multiple button combinations.

::: demo Wrap the button through the button group component to realize the combination of multiple buttons.
group
:::

## API

### Attributes

| attribute | describe | type | Optional value | default |
| ---- | --- | --- | ----- | ----- |
| type | Button type | string | default/primary/success/danger/text | default |
| disabled | Is it disabled | boolean | - | false |
| loading | Is it loaded | string | - | false |
| size | Button size | string | small/medium/large | medium |
| icon | Icon. You need to import the icon library yourself | string | - | - |
| round | Is it a circular button | boolean | - | false |
| block | Is it a block level button | boolean | - | false |
