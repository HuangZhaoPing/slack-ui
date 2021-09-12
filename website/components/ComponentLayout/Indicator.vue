<template>
  <div class="indicator">
    <div class="indicator--prev">
      <s-button
        v-if="prevRoute"
        type="text"
        icon="iconfont icon-left"
        @click="pushRoute(prevRoute)">
        {{ lang.previous }}：{{ prevRoute.title }}
      </s-button>
    </div>

    <div class="indicator--next">
      <s-button
        v-if="nextRoute"
        type="text"
        icon="iconfont icon-right"
        icon-position="right"
        @click="pushRoute(nextRoute)">
        {{ lang.next }}：{{ nextRoute.title }}
      </s-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getLangConfig } from '@/i18n'
import menus from '@/menus'
import { Menu } from 'types/website'

export default defineComponent({
  setup (props) {
    const lang = getLangConfig().components
    const router = useRouter()
    const route = useRoute()
    const prevRoute = ref<Menu | null>(null)
    const nextRoute = ref<Menu | null>(null)
    const data = flat()

    watch(() => route.path, path => {
      const index = data.findIndex(item => item.path === path)
      prevRoute.value = data[index - 1]
      nextRoute.value = data[index + 1]
    }, { immediate: true })

    function flat () {
      const result: Menu[] = []
      menus.forEach(({ children }) => {
        if (children) {
          result.push(...children)
        }
      })
      return result
    }

    function pushRoute (route: Menu) {
      router.push(route.path)
    }

    return {
      lang,
      prevRoute,
      nextRoute,
      router,
      pushRoute
    }
  }
})
</script>

<style scoped>
.indicator {
  display: flex;
  margin-top: 60px;
}

.indicator--prev {
  flex: 1;
}
</style>
