<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, onMounted, h, ref } from 'vue'

export default defineComponent({
  name: 'SPopper',
  setup (props, { slots }) {
    const xx = ref(null)
    h(slots.default!()[0], { ref: 'xx' })
    onMounted(() => {
      console.log(xx.value)
    })
    return {
      xx
    }
  }
})
</script>
