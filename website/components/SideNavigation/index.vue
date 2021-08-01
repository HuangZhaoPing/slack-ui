<template>
  <s-menu
    class="side-navigation"
    :active="route.path"
    @change="onChange">
    <s-menu-group v-for="group in routes" :key="group.path">
      <template #title>
        {{ group.meta && group.meta.title }}
      </template>
      <s-menu-item
        v-for="item in group.children"
        :key="item.key"
        :value="item.path">
        {{ item.meta && item.meta.title }}
      </s-menu-item>
    </s-menu-group>
  </s-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { formatRoutes as routes } from '@/router/navRoutes'

export default defineComponent({
  name: 'AppNav',
  setup () {
    const router = useRouter()
    const route = useRoute()
    function onChange (value: string) {
      router.push(value)
    }
    return {
      routes,
      router,
      route,
      onChange
    }
  }
})
</script>

<style scoped lang="scss">
.side-navigation::after {
  display: none;
}
</style>
