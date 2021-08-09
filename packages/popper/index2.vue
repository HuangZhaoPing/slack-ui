<template>
  <slot />
  <teleport to="body" :disabled="!appendToBody">
    <div v-if="visible" ref="popper" :class="getPopperClass()">
      <slot name="popper" />
    </div>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  nextTick,
  PropType,
  onMounted
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
    const visible = ref(false)
    const reference: Ref = ref(null)
    const popper: Ref = ref(null)

    onMounted(() => {
      console.log(slots.default!())
    })

    async function createInstance () {
      await nextTick()
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

    async function show () {
      if (!visible.value) {
        visible.value = true
        await nextTick()
        createInstance()
      }
      popper.value.style.setProperty('display', 'block')
      instance.update()
    }

    function hide () {
      popper.value.style.setProperty('display', 'none')
    }

    return {
      visible,
      reference,
      popper,
      getInstance,
      getPopperClass,
      show,
      hide
    }
  }
})
</script>
