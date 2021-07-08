<template>
  <ul class="side-navigation__list">
    <li class="side-navigation__item" v-for="group in nav" :key="group.path">
      <h4 class="side-navigation__title">{{ group.title }}</h4>
      <ul class="side-navigation__list">
        <li class="side-navigation__item" v-for="item in group.children" :key="item.key">
          <a :class="`side-navigation__link ${isActive(item.path) && 'active'}`" @click="pushRoute(group.path, item.path)">{{ item.title }}</a>
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
.side-navigation__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.side-navigation__title {
  margin: 20px 0;
  color: #000;
}
.side-navigation__link {
  cursor: pointer;
  display: block;
  padding: 10px 0;
}
.side-navigation__link:hover, .side-navigation__link.active {
  color: #3B82F6;
}
</style>