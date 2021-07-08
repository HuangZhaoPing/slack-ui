<template>
  <div class="demo-layout">
    <div class="demo-layout__component">
      <slot name="component" />
    </div>
    <p class="demo-layout__desc">
      <slot name="desc" />
    </p>
    <div ref="inner" class="demo-layout__inner" >
      <div ref="code" class="demo-layout__code">
        <slot name="code" />
      </div>
    </div>
    <div class="demo-layout__button" @click="toggleCollapse">
      <span class="demo-layout__text">{{ collapse ? lang[2] : lang[1] }}</span>
    </div>
    <template v-if="false"><slot /></template>
  </div>
</template>

<script lang="ts">
import { ref, Ref, defineComponent } from 'vue'
import { getLangConfig } from '@/i18n'

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
    return {
      lang: getLangConfig().components,
      collapse,
      inner,
      code,
      toggleCollapse
    }
  }
})
</script>

<style lang="scss" scoped>
.demo-layout {
  display: flex;
  flex-direction: column;
  transition: box-shadow .2s;
}
.demo-layout:hover {
  box-shadow: 0 2px 7px rgb(0 0 0 / 15%);
}
.demo-layout__component, .demo-layout__desc, .demo-layout__code, .demo-layout__button {
  border: 1px solid rgb(229, 231, 235);
  padding: 15px;
}
.demo-layout__desc {
  border-top: 0;
  margin: 0;
}
.demo-layout__inner {
  background-color: rgb(250, 250, 250);
  height: 0px;
  overflow: hidden;
  transition: height .2s;
}
.demo-layout__code {
  border-top: 0;
}
.demo-layout__button {
  border-top: 0;
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.demo-layout__text {
  color: #4b5563;
}
.demo-layout__button:hover .demo-layout__text {
  color: #3B82F6;
}
</style>
