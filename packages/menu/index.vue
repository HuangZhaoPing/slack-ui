<template>
  <ul
    :class="menuClass"
    @click="onClick">
    <slot />
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive } from 'vue'
import { findDatasetValue } from '../utils'

export default defineComponent({
  name: 'SMenu',
  props: {
    mode: {
      type: String,
      default: 'horizontal'
    },
    modelValue: String
  },
  setup (props, { emit }) {
    const menuClass = computed(() => {
      return {
        's-menu': true,
        [`s-menu__${props.mode}`]: true
      }
    })
    const menuProvider = reactive({
      active: props.modelValue,
      updateActive
    })
    provide('menuProvider', menuProvider)
    function updateActive (value: string) {
      menuProvider.active = value
      emit('update:modelValue', value)
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
