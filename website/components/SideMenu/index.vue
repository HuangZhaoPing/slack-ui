<template>
  <s-menu
    class="side-menu"
    :active="route.path"
    @change="onChange">
    <s-menu-group v-for="group in menus" :key="group.path">
      <template #title>
        {{ group.title }}
      </template>
      <s-menu-item
        v-for="item in group.children"
        :key="item.key"
        :value="item.path">
        {{ item.title }}
      </s-menu-item>
    </s-menu-group>
  </s-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import menus from '@/menus'

export default defineComponent({
  name: 'AppNav',
  setup () {
    const router = useRouter()
    const route = useRoute()
    function onChange (value: string) {
      router.push(value)
    }
    return {
      menus,
      router,
      route,
      onChange
    }
  }
})
</script>

<style scoped lang="scss">
.side-menu::after {
  display: none;
}
</style>
