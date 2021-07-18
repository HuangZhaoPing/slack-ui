<template>
  <li
    ref="menuItem"
    :class="itemClass"
    :data-menu-item-value="value"
    :style="itemStyle">
    <slot />
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, Ref } from 'vue'
import { MenuProvider } from 'types/packages'

export default defineComponent({
  name: 'SMenuItem',
  props: {
    value: String
  },
  setup (props) {
    const menuItem: Ref = ref(null)
    const menuProvider = inject<MenuProvider>('menuProvider')

    const itemClass = computed(() => {
      return {
        's-menu-item': true,
        's-menu-item__active': menuProvider && (menuProvider.active === props.value)
      }
    })
    const itemStyle = computed(() => {
      const style: Record<string, string> = {}
      if (menuProvider) {
        const { active, mode, textColor, activeBackgroundColor, activeTextColor } = menuProvider
        if (mode === 'vertical') style.paddingLeft = '24px'
        if (textColor) style.color = textColor
        if (active === props.value) {
          if (activeBackgroundColor) style.backgroundColor = activeBackgroundColor
          if (activeTextColor) {
            style.color = activeTextColor
            style.borderBottomColor = activeTextColor
          }
        }
      }
      return style
    })
    
    return {
      menuItem,
      itemClass,
      itemStyle
    }
  }
})
</script>
