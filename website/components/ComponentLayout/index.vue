<template>
  <div class="component-layout">
    <div class="component-layout__nav">
      <app-nav />
    </div>
    <div ref="mainRef" class="component-layout__main">
      <router-view />
      <navigation />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import AppNav from '../AppNav/index.vue'
import Navigation from './Navigation.vue'

export default defineComponent({
  name: 'ComponentLayout',
  components: {
    AppNav,
    Navigation
  },
  setup () {
    const mainRef: Ref = ref(null)
    onBeforeRouteUpdate(() => {
      mainRef.value.scrollTo(0, 0)
    })
    return {
      mainRef
    }
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
  border-right: 1px solid rgb(229, 231, 235);
  width: 180px;
  padding: 20px 35px;
}
.component-layout__main {
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 35px 60px 35px;
}
</style>
