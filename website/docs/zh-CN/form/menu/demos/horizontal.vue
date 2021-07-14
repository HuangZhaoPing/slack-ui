<template>
  <div>
    xxx: {{ active }}
    <s-menu v-model="active">
      <s-menu-item value="1"><div>菜单一</div></s-menu-item>
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
