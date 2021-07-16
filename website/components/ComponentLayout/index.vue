<template>
  <div class="component-layout">
    <div class="component-layout__nav">
      <side-navigation />
    </div>
    <div class="component-layout__main">
      <router-view />
      <indicator />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideNavigation from '../SideNavigation/index.vue'
import Indicator from './Indicator.vue'

export default defineComponent({
  name: 'ComponentLayout',
  components: {
    SideNavigation,
    Indicator
  },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.component-layout {
  display: flex;
  height: 100%;
  overflow: hidden;
}
.component-layout__nav {
  padding: 40px 0;
  flex-shrink: 0;
  width: 220px;
  border-right: 1px solid rgb(243, 244, 246);
  overflow-y: auto;
}
.component-layout__main {
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 35px 60px 35px;
}
</style>
