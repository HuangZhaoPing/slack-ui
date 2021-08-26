<template>
  <popper v-bind="$attrs" :popper-class="getTooltipClass()">
    <slot />
    <template #popper>
      <template v-if="$slots.content"><slot name="content" /></template>
      <template v-else>{{ content }}</template>
    </template>
  </popper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Popper from '../popper'

export default defineComponent({
  name: 'STooltip',
  components: {
    Popper
  },
  props: {
    theme: {
      type: String,
      default: 'dark'
    },
    content: String,
    popperClass: String
  },
  setup (props) {
    function getTooltipClass () {
      let tooltipClass = `s-tooltip s-tooltip--${props.theme}`
      if (props.popperClass) tooltipClass = `${tooltipClass} ${props.popperClass}`
      return tooltipClass
    }
    return {
      getTooltipClass
    }
  }
})
</script>
