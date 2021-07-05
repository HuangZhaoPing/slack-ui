<template>
  <div class="component-layout">
    <div class="component-layout__nav">
      <app-nav />
    </div>
    <div class="component-layout__main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppNav from '../AppNav/index.vue'

export default defineComponent({
  name: 'ComponentLayout',
  components: {
    AppNav
  }
})
</script>

<style scoped>
.component-layout {
  display: flex;
  height: 100%;
  overflow: hidden;
}
.component-layout__nav {
  flex-shrink: 0;
  border-right: 1px solid #eee;
  width: 180px;
  padding: 20px;
}
.component-layout__main {
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
}
</style>
