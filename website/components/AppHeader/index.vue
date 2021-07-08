<template>
  <div class="app-header">
    <h1>Slack</h1>
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

<style scoped>
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
</style>
