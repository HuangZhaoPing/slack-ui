<template>
  <div class="s-button-group">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SButtonGroup'
})
</script>
