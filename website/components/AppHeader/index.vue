<template>
  <div class="app-header">
    <router-link :to="`/${selected}`">
      <h1>Slack</h1>
    </router-link>

    <ul class="app-header__nav">
      <li><router-link :to="`/${selected}`">首页</router-link></li>
      <li><router-link :to="`/${selected}/component`">组件</router-link></li>
    </ul>
    <!-- <select v-model="selected" @change="onChange">
      <option v-for="item in langData" :key="item.lang" :value="item.lang">{{ item.name }}</option>
    </select> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { getLangName, getLangMap } from '@/i18n'

export default defineComponent({
  setup () {
    const router = useRouter()
    const onChange = ({ target }: { target: HTMLInputElement }) => {
      const value = target.value
      const fullPath = router.currentRoute.value.fullPath
      location.href = `${location.origin}${fullPath.replace(/\/[^/]+/, `/${value}`)}`
    }
    return {
      langData: Object.values(getLangMap()),
      selected: getLangName(),
      onChange
    }
  }
})
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
}
.app-header__list {
  margin: 0;
  padding: 0;
}
.app-header__item {
  float: left;
  list-style: none;
}
.app-header__nav {
  padding: 0;
  margin: 0 40px;
  display: flex;
  align-items: center;
  list-style: none;

  li:not(:first-child) {
    margin-left: 20px
  }
}
</style>
