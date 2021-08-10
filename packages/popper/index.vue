<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'SPopper',
  setup (props, { slots }) {
    onMounted(() => {
      console.log(slots.default!()[0])
    })
  }
})
</script>
