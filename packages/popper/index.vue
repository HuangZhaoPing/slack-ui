<template>
  <span ref="a" class="s-popper">
    <slot />
  </span>
  <teleport to="body">
    <div ref="b" class="s-popper__content">A</div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from 'vue'
import { createPopper } from '@popperjs/core'

export default defineComponent({
  name: 'SPopper',
  setup () {
    const a: Ref = ref(null)
    const b: Ref = ref(null)
    onMounted(() => {
      createPopper(a.value, b.value)
    })

    return {
      a,
      b
    }
  }
})
</script>
