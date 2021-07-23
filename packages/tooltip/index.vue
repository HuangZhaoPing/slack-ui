<template>
  <template ref="tooltip"><slot /></template>
  <teleport to="body" :disabled="!appendToBody">
    <div ref="content" :class="`s-tooltip__content s-tooltip__${theme}`">
      <slot name="content" />
      <div ref="arrow" class="s-tooltip__arrow"></div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref, PropType } from 'vue'
import { createPopper, Instance, Placement } from '@popperjs/core'

export default defineComponent({
  name: 'STooltip',
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom'
    },
    offset: {
      type: Array,
      default: () => {
        return [0, 8]
      }
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { slots }) {
    const tooltip: Ref = ref(null)
    const content: Ref = ref(null)
    const arrow: Ref = ref(null)
    let instance: Instance
    const options = {
      placement: props.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: props.offset
          }
        },
        {
          name: 'arrow',
          options: {
            element: arrow.value
          }
        }
      ]
    }
    onMounted(() => {
      instance = createPopper(tooltip.value, content.value, options)
    })
    function onMouseenter () {
      content.value.classList.add('s-tooltip__block')
      instance.update()
    }
    function onMouseleave () {
      content.value.classList.remove('s-tooltip__block')
    }
    return {
      arrow,
      tooltip,
      content,
      onMouseenter,
      onMouseleave
    }
  }
})
</script>
