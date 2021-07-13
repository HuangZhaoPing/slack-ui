<template>
  <div>
    <s-menu v-model="active">
      <s-menu-item index="1">菜单一</s-menu-item>
      <s-menu-item index="2">菜单二</s-menu-item>
      <s-menu-item index="3">菜单三</s-menu-item>
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
