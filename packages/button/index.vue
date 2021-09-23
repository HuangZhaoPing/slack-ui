<template>
  <button
    :disabled="disabled"
    :class="[
      's-button',
      `s-button--${type}`,
      `s-button--${size}`,
      (icon && $slots.default) && `s-button--${iconPosition}`,
      round && 's-button--round',
      loading && 's-button--loading',
      block && 's-button--block'
    ]">
    <i v-if="icon" :class="`s-button--icon ${icon}`"></i>
    <span v-if="$slots.default" class="s-button--inner">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    round: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  }
})
</script>
