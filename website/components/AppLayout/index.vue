<template>
  <div class="app-layout">
    <div class="app-layout__header">
      <app-header />
    </div>
    <div class="app-layout__main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '../AppHeader/index.vue'

export default defineComponent({
  name: 'AppLayout',
  components: {
    AppHeader
  }
})
</script>

<style scoped>
.app-layout {
  overflow: hidden;
  height: 100vh;
  position: relative;
}
.app-layout__header {
  height: 60px;
  position: absolute;
  z-index: 1;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, .1);
  top: 0;
  left: 0;
  right: 0;
}
.app-layout__main {
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
