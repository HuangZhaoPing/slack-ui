<template>
  <ul
    ref="menuRef"
    :class="menuClass"
    :style="menuStyle"
    @click="onClick"
    @mouseover="onMouseover">
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
    active: String,
    backgroundColor: String,
    activeBackgroundColor: String,
    textColor: String,
    activeTextColor: String
  },
  emits: ['change'],
  setup (props, { emit }) {
    const menuRef: Ref = ref(null)
    const menuClass = computed(() => {
      return {
        's-menu': true,
        [`s-menu__${props.mode}`]: true
      }
    })
    const menuStyle = computed(() => {
      const style: { backgroundColor?: string } = {}
      props.backgroundColor && (style.backgroundColor = props.backgroundColor)
      return style
    })
    watch(() => props.active, val => (menuProvider.active = val))
    const menuProvider = reactive({
      mode: props.mode,
      active: props.active,
      activeBackgroundColor: props.activeBackgroundColor,
      textColor: props.textColor,
      activeTextColor: props.activeTextColor,
      updateActive
    })
    provide('menuProvider', menuProvider)
    function updateActive (value: string) {
      menuProvider.active = value
      emit('change', value)
    }
    function onClick ({ target }: { target: EventTarget }) {
      const node = findParentNodeByDataset(target, 'menuItemValue')
      node && updateActive(node.dataset.menuItemValue!)
    }
    function onMouseover ({ target }: { target: EventTarget }) {
      // const node = findParentNodeByDataset(target, 'menuItemValue')
      // node && (node.style.color = props.activeTextColor!)
      // node && (node.style.borderBottom = `1px solid ${props.activeTextColor}`)
    }
    return {
      menuRef,
      menuClass,
      menuStyle,
      onClick,
      onMouseover
    }
  }
})
</script>
