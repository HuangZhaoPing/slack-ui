<template>
  <li
    :class="itemClass"
    :data-menu-item-value="value">
    <slot />
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import { MenuProvider } from 'types/packages'

export default defineComponent({
  name: 'SMenuItem',
  props: {
    value: String
  },
  setup (props) {
    const menuProvider = inject<MenuProvider>('menuProvider')
    const itemClass = computed(() => {
      return {
        's-menu-item': true,
        's-menu-item__active': menuProvider!.active === props.value
      }
    })
    return {
      itemClass
    }
  }
})
</script>
