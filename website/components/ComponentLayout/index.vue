<template>
  <div class="component-layout">
    <div class="component-layout--nav">
      <side-menu />
    </div>
    <div ref="main" class="component-layout--main">
      <div ref="content" class="component-layout--content">
        <router-view />
        <indicator />
      </div>
      <div class="component-layout--anchor">
        <anchor v-model="selected" :data="anchorData" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import SideMenu from '../SideMenu/index.vue'
import Indicator from './Indicator.vue'
import Anchor from './Anchor.vue'
import { AnchorItem } from 'types/website'

export default defineComponent({
  name: 'ComponentLayout',
  components: {
    SideMenu,
    Indicator,
    Anchor
  },
  setup (props) {
    const route = useRoute()
    const main: Ref = ref('main')
    const content: Ref = ref('content')
    const anchorDoms = ref<HTMLElement[]>([])
    const anchorData = ref<AnchorItem[]>([])
    const selected = ref('')

    onMounted(() => {
      addScrollListener()
    })

    onBeforeUnmount(() => {
      removeScrollListener()
    })

    watch(() => route.path, () => {
      nextTick(() => {
        selected.value = ''
        generateAnchorData()
        scrollToTop()
      })
    }, { immediate: true })

    function addScrollListener () {
      main.value.addEventListener('scroll', scrollListenerHandler)
    }

    function removeScrollListener () {
      main.value.removeEventListener('scroll', scrollListenerHandler)
    }

    function scrollListenerHandler ({ target }: { target: HTMLElement }) {
      const scrollTop = target.scrollTop
      const dom = anchorDoms.value.find((item, index) => {
        const nextDom = anchorDoms.value[index + 1]
        return (scrollTop >= item.offsetTop) && (nextDom ? scrollTop < nextDom.offsetTop : true)
      })
      dom ? (selected.value = dom.id) : (selected.value = '')
    }

    function generateAnchorData () {
      anchorDoms.value = content.value ? Array.from(content.value.querySelectorAll('[id]')) : []
      anchorData.value = anchorDoms.value.map(item => {
        return {
          title: item.id.replace('-', ' '),
          id: item.id,
          level: Number(item.tagName.slice(1)) - 1
        }
      })
    }

    function scrollToTop () {
      main.value && (main.value.scrollTop = 0)
    }

    return {
      main,
      content,
      anchorData,
      selected
    }
  }
})
</script>

<style scoped lang="scss">
.component-layout {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.component-layout--nav {
  border-right: 1px solid rgb(243, 244, 246);
  flex-shrink: 0;
  overflow-y: auto;
  padding: 40px 0;
  width: 220px;
}

.component-layout--main {
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
}

.component-layout--content {
  margin-right: 150px;
  padding: 20px 20px 100px;
}

.component-layout--anchor {
  border-left: 1px solid #f3f4f6;
  bottom: 0;
  box-sizing: border-box;
  overflow-y: auto;
  position: fixed;
  right: 8px;
  top: 60px;
  width: 150px;
}

@media screen and (max-width: 1000px) {
  .component-layout--content {
    margin-right: 0;
  }

  .component-layout--anchor {
    display: none;
  }
}
</style>
