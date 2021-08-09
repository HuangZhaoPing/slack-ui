<template>
  <slot />
  <teleport to="body" :disabled="!appendToBody">
    <div ref="popper" :class="getPopperClass()">
      <slot name="popper" />
    </div>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  Ref,
  PropType
} from 'vue'
import {
  createPopper,
  Instance,
  Placement
} from '@popperjs/core'

export default defineComponent({
  name: 'SPopper',
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom'
    },
    offset: {
      type: Array,
      default: () => {
        return [0, 0]
      }
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    popperClass: String
  },
  setup (props, { slots }) {
    let instance: Instance
    const reference: Ref = ref(null)
    const popper: Ref = ref(null)

    onMounted(() => (createInstance()))

    function createInstance () {
      reference.value = slots.default ? slots.default()[0].el : null
      instance = createPopper(reference.value, popper.value, {
        placement: props.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: props.offset
            }
          }
        ]
      })
    }

    function getInstance () {
      return instance
    }

    function getPopperClass () {
      return props.popperClass ? `s-popper ${props.popperClass}` : 's-popper'
    }

    return {
      reference,
      popper,
      getInstance,
      getPopperClass
    }
  }
})
</script>
