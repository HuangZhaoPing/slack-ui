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
import { computed, defineComponent, provide, reactive, watch, onMounted, ref, Ref } from 'vue'
import { findParentNodeByDataset } from '../utils'

export default defineComponent({
  name: 'SMenu',
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    defaultActive: String,
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
    watch(() => props.defaultActive, val => (menuProvider.defaultActive = val))
    onMounted(() => {
      Array.from(menuRef.value.querySelectorAll('.s-menu-item')).forEach((item: any) => {
        if (props.textColor) {
          item.style.color = props.textColor
        }
      })
    })
    const menuProvider = reactive({
      defaultActive: props.defaultActive,
      updateActive
    })
    provide('menuProvider', menuProvider)
    function updateActive (value: string) {
      menuProvider.defaultActive = value
      emit('change', value)
    }
    function onClick ({ target }: { target: EventTarget }) {
      const node = findParentNodeByDataset(target, 'menuItemValue')
      node && (node.style.backgroundColor = props.activeTextColor!)
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
