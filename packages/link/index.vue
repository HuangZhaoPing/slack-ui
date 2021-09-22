<template>
  <a
    v-bind="$attrs"
    :class="[
      's-link',
      `s-link--${type}`,
      disabled && 's-link--disabled',
      underline && 's-link--underline'
    ]"
    @click="onClick">
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SLink',
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    function onClick (event: Event) {
      if (props.disabled) {
        event.stopPropagation()
        event.preventDefault()
        return
      }
      emit('click')
    }

    return {
      onClick
    }
  }
})
</script>
