<template>
  <div class="app-header">
    <div style="flex: 1 1 auto;">
      <router-link :to="`/${langName}/home`">
        <img class="app-header--logo" src="/assets/images/logo.jpg" alt="">
      </router-link>
    </div>
    <lang-select />
    <github-icon />
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
import { getLangName, getLangMap, getLangConfig } from '@/i18n'
import GithubIcon from './GithubIcon.vue'
import LangSelect from './LangSelect.vue'

const lang = getLangConfig().components

export default defineComponent({
  components: {
    GithubIcon,
    LangSelect
  },
  setup () {
    const router = useRouter()
    const route = useRoute()
    const langName = getLangName()
    const menus = [
      { label: lang.components, value: `/${langName}/component` }
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
}

.app-header--menu::after {
  display: none;
}

.app-header--logo {
  height: 40px;
}
</style>
