<template>
  <ul :class="`s-menu s-menu__${mode}`" @click="onClick"><slot /></ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { findParentNodeByClassName } from '../utils'

export default defineComponent({
  name: 'SMenu',
  props: {
    mode: {
      type: String,
      default: 'horizontal'
    }
  },
  setup () {
    let currentNode: Element | null = null
    function onClick ({ target }: { target: EventTarget }) {
      if (target) {
        const node = findParentNodeByClassName(target, 's-menu-item')
        if (currentNode) currentNode.classList.remove('s-menu-item__active')
        if (node) {
          node.classList.add('s-menu-item__active')
          currentNode = node
        }
      }
    }
    return {
      onClick
    }
  }
})
</script>
