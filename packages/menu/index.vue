<template>
  <ul
    ref="menuRef"
    :class="menuClass"
    @click="onClick">
    <slot />
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, watch, ref, Ref } from 'vue'
import { findParentNodeByDataset } from '../utils'

export default defineComponent({
  name: 'SMenu',
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    theme: {
      type: String,
      default: 'light'
    },
    active: String
  },
  emits: ['change'],
  setup (props, { emit }) {
    const menuRef: Ref = ref(null)
    const menuClass = computed(() => {
      return {
        's-menu': true,
        [`s-menu__${props.mode}`]: true,
        [`s-menu__${props.theme}`]: true
      }
    })
    watch(() => props.active, val => (menuProvider.active = val))
    const menuProvider = reactive({
      mode: props.mode,
      active: props.active,
      theme: props.theme,
      updateActive
    })
    provide('menuProvider', menuProvider)
    function updateActive (value: string) {
      menuProvider.active = value
      emit('change', value)
    }
    function onClick ({ target }: { target: EventTarget }) {
      const node = findParentNodeByDataset(target, 'menuItemValue')
      if (node && node.dataset) {
        updateActive(node.dataset.menuItemValue!)
      }
    }
    return {
      menuRef,
      menuClass,
      onClick
    }
  }
})
</script>
