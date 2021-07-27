<template>
  <div class="demo-layout">
    <div class="demo-layout--component">
      <slot name="component" />
    </div>
    <p class="demo-layout--desc">
      <slot name="desc" />
    </p>
    <div ref="inner" class="demo-layout--inner" >
      <div ref="code" class="demo-layout--code">
        <s-button class="demo-layout--copy" type="text" @click="copyCode">复制代码</s-button>
        <slot name="code" />
      </div>
    </div>
    <div class="demo-layout--button" @click="toggleCollapse">
      <span class="demo-layout--text">{{ collapse ? lang[2] : lang[1] }}</span>
    </div>
    <template v-if="false"><slot /></template>
  </div>
</template>

<script lang="ts">
import { ref, Ref, defineComponent } from 'vue'
import { getLangConfig } from '@/i18n'
import { copyToClipboard } from '@/utils'

export default defineComponent({
  name: 'DemoLayout',
  setup () {
    const collapse = ref(false)
    const inner: Ref = ref(null)
    const code: Ref = ref(null)

    function toggleCollapse () {
      collapse.value = !collapse.value
      inner.value.style.height = collapse.value ? `${code.value.offsetHeight}px` : '0px'
    }
    function copyCode () {
      const target = code.value.querySelector('[data-source]')
      /* eslint prefer-regex-literals: "off" */
      const match = target.innerHTML.match(new RegExp('<!--([\\s\\S]+)-->'))
      const text = match ? match[1] : ''
      copyToClipboard(text).then(() => {
        console.log('复制成功')
      }).catch(() => {
        console.log('复制失败')
      })
    }
    return {
      lang: getLangConfig().components,
      collapse,
      inner,
      code,
      copyCode,
      toggleCollapse
    }
  }
})
</script>

<style lang="scss" scoped>
.demo-layout {
  border: 1px solid rgb(243, 244, 246);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.demo-layout:hover {
  box-shadow: 0 2px 7px rgb(0 0 0 / 15%);
}

.demo-layout--component,
.demo-layout--desc,
.demo-layout--code,
.demo-layout--button {
  border-bottom: 1px solid rgb(243, 244, 246);
}

.demo-layout--component {
  padding: 30px 25px;
}

.demo-layout--desc {
  margin: 0;
  padding: 10px 25px;
}

.demo-layout--inner {
  height: 0;
  overflow: hidden;
  transition: height 0.2s;
}

.demo-layout--code {
  background-color: rgb(250, 250, 250);
  position: relative;
}

.demo-layout--copy {
  position: absolute;
  right: 10px;
  top: 10px;
}

.demo-layout--button {
  border-bottom: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 8px 0;
}

.demo-layout--text {
  color: #4b5563;
}

.demo-layout--button:hover .demo-layout--text {
  color: #3b82f6;
}
</style>
