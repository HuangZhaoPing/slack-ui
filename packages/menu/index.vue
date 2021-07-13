<template>
  <ul ref="menuRef" :class="`s-menu s-menu__${mode}`" @click="onClick"><slot /></ul>
</template>

<script lang="ts">
import { watch, defineComponent, onMounted, ref, Ref } from 'vue'
import { findParentNodeByClassName } from '../utils'

export default defineComponent({
  name: 'SMenu',
  props: {
    mode: {
      type: String,
      default: 'horizontal'
    },
    modelValue: String
  },
  setup (props, { slots, emit }) {
    const menuRef: Ref = ref(null)
    let currentNode: Element | null = null
    const defaultSlots = slots.default ? slots.default() : []

    onMounted(() => {
      watch(() => props.modelValue, val => {
        currentNode && currentNode.classList.remove('s-menu-item__active')
        const index = defaultSlots.findIndex(item => item.props?.index === val)
        const items = Array.from(menuRef.value.querySelectorAll(':scope > .s-menu-item')) as Element[]
        const target = items[index]
        target && target.classList.add('s-menu-item__active')
        currentNode = target
      }, {
        immediate: true
      })
    })
    
    function onClick ({ target }: { target: EventTarget }) {
      const node = findParentNodeByClassName(target, 's-menu-item')
      const items = Array.from(menuRef.value.querySelectorAll('.s-menu-item')) as Element[]
      const index = items.findIndex(item => item === node)
      emit('update:modelValue', defaultSlots[index].props?.index)
    }
    return {
      onClick,
      menuRef
    }
  }
})
</script>
