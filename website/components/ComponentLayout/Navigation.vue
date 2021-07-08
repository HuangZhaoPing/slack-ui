<template>
  <div class="navigation">
    <div class="navigation__prev">
      <s-button
        v-if="prevRoute"
        type="text"
        icon="iconfont icon-left"
        @click="pushRoute(prevRoute)">
        {{ lang[3] }}：{{ prevRoute.title }}
      </s-button>
    </div>

    <div class="navigation__next">
      <s-button
        v-if="nextRoute"
        type="text"
        icon="iconfont icon-right"
        icon-position="right"
        @click="pushRoute(nextRoute)">
        {{ lang[4] }}：{{ nextRoute.title }}
      </s-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getLangName, getLangConfig } from '@/i18n'
import nav from '@/router/routes/nav'
import { Route } from 'types/website'

type ExtendsRoute = Route & { groupPath?: string }

export default defineComponent({
  setup (props) {
    const lang = getLangConfig().components
    const router = useRouter()
    const route = useRoute()
    const prevRoute = ref<ExtendsRoute | null>(null)
    const nextRoute = ref<ExtendsRoute | null>(null)
    const data = flat()

    watch(() => route.path, val => {
      const path = val.slice(val.lastIndexOf('/'))
      const index = data.findIndex(item => item.path === path)
      prevRoute.value = data[index - 1]
      nextRoute.value = data[index + 1]
    },{ immediate: true })

    function flat () {
      const result: ExtendsRoute[] = []
      nav.forEach(({ children, path }) => {
        if (children) {
          children.forEach(item => {
            result.push({
              groupPath: path,
              ...item
            })
          })
        }
      })
      return result
    }

    function pushRoute (route: ExtendsRoute) {
      router.push(`/${getLangName()}/component${route.groupPath}${route.path}`)
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
.navigation {
  margin-top: 40px;
  display: flex;
}

.navigation__prev {
  flex: 1;
}
</style>
