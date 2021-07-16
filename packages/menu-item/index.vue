<template>
  <li
    ref="menuItem"
    :class="itemClass"
    :data-menu-item-value="value"
    :style="{ paddingLeft }">
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
    const paddingLeft = ref('24px')

    const itemClass = computed(() => {
      return {
        's-menu-item': true,
        's-menu-item__active': menuProvider!.defaultActive === props.value
      }
    })
    return {
      menuItem,
      itemClass,
      paddingLeft
    }
  }
})
</script>
