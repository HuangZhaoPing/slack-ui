<template>
  <slot ref="reference" />
  <teleport to="body">
    <transition name="fade">
    <div ref="popper" v-show="visible2" :class="getPopperClass()">
      <slot name="popper" />
      <div ref="arrow" class="s-popper--arrow"></div>
    </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  Ref,
  PropType,
  nextTick
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
        return [0, 6]
      }
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    trigger: {
      type: String,
      default: 'hover'
    },
    popperClass: String
  },
  setup (props, { slots }) {
    let instance: Instance
    const visible = ref(false)
    const visible2 = ref(false)
    const reference: Ref = ref(null)
    const popper: Ref = ref(null)
    const arrow: Ref = ref(null)

    onMounted(() => {
      reference.value = slots.default!()[0].el
      reference.value.addEventListener('mouseenter', async () => {
        if (!visible.value) {
          visible.value = true
          await nextTick()
          createInstance()
        }
        show()
      })

      reference.value.addEventListener('mouseleave', () => {
        hide()
      })
    })

    function createInstance () {
      instance = createPopper(reference.value, popper.value, {
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
      })
    }
    function show () {
      visible2.value = true
      instance.update()
    }

    function hide () {
      visible2.value = false
    }

    function getPopperClass () {
      return props.popperClass ? `s-popper ${props.popperClass}` : 's-popper'
    }

    return {
      visible2,
      reference,
      popper,
      arrow,
      getPopperClass
    }
  }
})
</script>
