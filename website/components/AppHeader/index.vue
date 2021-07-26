<template>
  <div class="app-header">
    <div style="flex: 1 1 auto;">
      <router-link :to="`/${langName}`">
        <h1>Slack</h1>
      </router-link>
    </div>
    <s-menu
      class="app-header--menu"
      mode="horizontal"
      :active="defaultActive"
      @change="onMenuChange">
      <s-menu-item
        v-for="item in menus"
        :key="item.value"
        :value="item.value">
        {{ item.label }}
      </s-menu-item>
    </s-menu>
  </div>
    <!-- <select v-model="selected" @change="onChange">
      <option v-for="item in langData" :key="item.lang" :value="item.lang">{{ item.name }}</option>
    </select> -->
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getLangName, getLangMap } from '@/i18n'

export default defineComponent({
  setup () {
    const router = useRouter()
    const route = useRoute()
    const langName = getLangName()
    const menus = [
      { label: '组件', value: `/${langName}/component` }
    ]
    const defaultActive = computed(() => {
      const match = route.path.match(new RegExp(`\\/${langName}\\/[^/]+`))
      return match && match[0]
    })
    const onChange = ({ target }: { target: HTMLInputElement }) => {
      location.href = `${location.origin}${route.fullPath.replace(/\/[^/]+/, `/${target.value}`)}`
    }
    function onMenuChange (value: string) {
      router.push(value)
    }
    return {
      langData: Object.values(getLangMap()),
      onChange,
      onMenuChange,
      defaultActive,
      menus,
      langName
    }
  }
})
</script>

<style scoped lang="scss">
.app-header {
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 20px;
}

.app-header--menu {
  height: 100%;
  margin: 0 30px;

  &::after {
    display: none;
  }
}
</style>
