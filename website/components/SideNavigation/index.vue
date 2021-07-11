<template>
  <ul class="side-navigation__list">
    <li class="side-navigation__item" v-for="group in routes" :key="group.path">
      <h4 class="side-navigation__title">{{ group.meta && group.meta.title }}</h4>
      <ul class="side-navigation__list">
        <li class="side-navigation__item" v-for="item in group.children" :key="item.key">
          <a :class="`side-navigation__link ${isActive(item.path) && 'active'}`" @click="pushRoute(item.path)">{{ item.meta && item.meta.title }}</a>
        </li>
      </ul>
    </li>
  </ul>
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
    function isActive (path: string) {
      return route.path === path
    }
    function pushRoute (path: string) {
      router.push(path)
    }
    return {
      routes,
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
  color: rgb(96, 165, 250);
}
</style>