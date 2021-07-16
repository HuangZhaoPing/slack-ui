<template>
  <ul :class="menuClass" @click="onClick">
    <slot />
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, watch } from 'vue'
import { findDatasetValue } from '../utils'

export default defineComponent({
  name: 'SMenu',
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    defaultActive: String
  },
  emits: ['change'],
  setup (props, { emit }) {
    const menuClass = computed(() => {
      return {
        's-menu': true,
        [`s-menu__${props.mode}`]: true
      }
    })
    watch(() => props.defaultActive, val => (menuProvider.defaultActive = val))
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
      const index = findDatasetValue(target, 'menuItemValue')
      index && updateActive(index)
    }
    return {
      menuClass,
      onClick
    }
  }
})
</script>
