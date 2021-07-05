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
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
}
.app-layout__header {
  padding: 0 15px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid rgb(229, 231, 235);
  height: 60px;
}
.app-layout__main {
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
