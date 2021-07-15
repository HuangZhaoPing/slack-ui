<template>
  <div style="width: 180px; height: 300px">
    <s-menu v-model="active" mode="vertical">
      <s-menu-item value="1">菜单一</s-menu-item>
      <s-menu-item value="2">菜单二</s-menu-item>
      <s-menu-item value="3">菜单三</s-menu-item>
    </s-menu>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const active = ref('1')
    return {
      active
    }
  }
}
</script>
