<template>
  <div>{{ lang.showCode }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getLangConfig } from '@/i18n'

export default defineComponent({
  setup () {
    const lang = getLangConfig().pages.home
    return {
      lang
    }
  }
})
</script>
