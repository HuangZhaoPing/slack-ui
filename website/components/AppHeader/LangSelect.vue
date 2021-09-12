<template>
  <select v-model="selected" @change="onChange">
    <option value="zh-CN">中文</option>
    <option value="en-US">English</option>
  </select>
</template>

<script lang="ts">
import { ref } from 'vue'
import { getLangName } from '@/i18n'

export default {
  setup () {
    const langName = getLangName()
    const selected = ref(getLangName())

    function onChange () {
      location.href = location.href.replace(langName, selected.value)
    }
    return {
      selected,
      onChange
    }
  }
}
</script>
