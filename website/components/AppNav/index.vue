<template>
  <ul class="app-nav__list">
    <li class="app-nav__item" v-for="group in nav" :key="group.path">
      <h5 class="app-nav__title">{{ group.title }}</h5>
      <ul class="app-nav__list">
        <li class="app-nav__item" v-for="item in group.children" :key="item.key">
          <a :class="`app-nav__link ${isActive(item.path) && 'active'}`" @click="pushRoute(group.path, item.path)">{{ item.title }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import nav from '@/router/routes/nav'
import { getLangName } from '@/i18n'

export default defineComponent({
  name: 'AppNav',
  setup () {
    const router = useRouter()
    function isActive (path: string) {
      return router.currentRoute.value.fullPath.includes(path)
    }
    function pushRoute (groupPath: string, itemPath: string) {
      router.push(`/${getLangName()}/component${groupPath}${itemPath}`)
    }
    return {
      nav,
      router,
      isActive,
      pushRoute
    }
  }
})
</script>

<style scoped>
.app-nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.app-nav__title {
  margin: 20px 0;
}
.app-nav__link {
  cursor: pointer;
  display: block;
  padding: 10px 0;
}
.app-nav__link:hover, .app-nav__link.active {
  color: #3B82F6;
}
</style>