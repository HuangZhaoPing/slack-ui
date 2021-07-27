<template>
  <div class="app-layout">
    <div class="app-layout--header">
      <app-header />
    </div>
    <div class="app-layout--main">
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
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.app-layout--header {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  height: 60px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.app-layout--main {
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: 60px;
}
</style>
