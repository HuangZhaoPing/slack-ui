<template>
  <div class="component-layout">
    <div class="component-layout--nav">
      <side-navigation />
    </div>
    <div ref="main" class="component-layout--main">
      <div class="component-layout--content">
        <router-view />
        <indicator />
      </div>
      <div class="component-layout--anchor">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue'
import SideNavigation from '../SideNavigation/index.vue'
import Indicator from './Indicator.vue'

export default defineComponent({
  name: 'ComponentLayout',
  components: {
    SideNavigation,
    Indicator
  },
  setup () {
    const main: Ref = ref('main')
    onMounted(() => {
      Array.from(main.value.querySelectorAll('[id]')).forEach((item: any) => {
        console.log(decodeURIComponent(item.id))
      })
    })
    return {
      main
    }
  }
})
</script>

<style scoped lang="scss">
.component-layout {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.component-layout--nav {
  border-right: 1px solid rgb(243, 244, 246);
  flex-shrink: 0;
  overflow-y: auto;
  padding: 40px 0;
  width: 220px;
}

.component-layout--main {
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
}

.component-layout--content {
  border-right: 1px solid #f3f4f6;
  margin-right: 200px;
  padding: 20px 35px 60px;
}

.component-layout--anchor {
  width: 200px;
}
</style>
