<template>
  <li class="s-menu-group">
    <div class="s-menu-group--title" :style="{ paddingLeft }">
      <slot name="title" />
    </div>
    <ul><slot /></ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SMenuGroup',
  setup () {
    const paddingLeft = ref('24px')
    return {
      paddingLeft
    }
  }
})
</script>
