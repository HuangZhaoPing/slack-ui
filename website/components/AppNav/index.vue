<template>
  <ul class="app-nav__list">
    <li class="app-nav__item" v-for="group in nav" :key="group.path">
      <h5 class="app-nav__title">{{ group.title }}</h5>
      <ul class="app-nav__list">
        <li class="app-nav__item" v-for="item in group.children" :key="item.key">
          <a class="app-nav__link">{{ item.title }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import nav from '@/router/routes/nav'

export default defineComponent({
  name: 'AppNav',
  setup () {
    return {
      nav
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
  padding: 8px 0;
}
.app-nav__link:hover {
  color: #3B82F6;
}
</style>