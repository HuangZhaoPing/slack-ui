<template>
  <button
    :disabled="disabled"
    :class="[
      's-button',
      `s-button__${type}`,
      `s-button__${size}`,
      (icon && $slots.default) && `s-button__icon__${iconPosition}`,
      round && 's-button__round',
      loading && 's-button__loading',
      block && 's-button__block'
    ]">
    <i v-if="icon" :class="`s-button__icon ${icon}`"></i>
    <span v-if="$slots.default" class="s-button__content">
      <slot />
    </span>
  </button>
</template>

<script>
import { defineComponent } from 'vue';
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
});
</script>
