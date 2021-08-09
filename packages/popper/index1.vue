<template>
  <slot />
  <teleport to="body" :disabled="!appendToBody">
    <div v-if="isInit" ref="popper" :class="getPopperClass()">
      <slot name="popper" />
      <!-- <div ref="arrow" class="s-popper--arrow"></div> -->
    </div>
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
        return [0, 0]
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
    popperClass: String,
    showDelay: {
      type: Number,
      default: 200
    },
    hideDelay: {
      type: Number,
      default: 200
    }
  },
  setup (props, { slots }) {
    let instance: Instance
    const isInit = ref(false)
    const visible = ref(false)
    const reference: Ref = ref(null)
    const popper: Ref = ref(null)
    // const arrow: Ref = ref(null)
    let showTimeout: NodeJS.Timeout
    let hideTimeout: NodeJS.Timeout
    let visibleTimeout: NodeJS.Timeout

    onMounted(() => (addReferenceEventListener()))

    function addReferenceEventListener () {
      reference.value = slots.default ? slots.default()[0].el : null
      if (reference.value) {
        if (props.trigger === 'hover') {
          reference.value.addEventListener('mouseenter', referenceMouseenterHandler)
          reference.value.addEventListener('mouseleave', referenceMouseleaveHandler)
        }
      }
    }

    async function referenceMouseenterHandler () {
      if (!isInit.value) {
        isInit.value = true
        await nextTick()
        createInstance()
        addPopperEventListener()
      }
      show()
    }

    function referenceMouseleaveHandler () {
      hide()
    }

    function addPopperEventListener () {
      if (props.trigger === 'hover') {
        popper.value.addEventListener('mouseenter', popperMouseenter)
        popper.value.addEventListener('mouseleave', popperMouseleave)
      }
    }

    function popperMouseenter () {
      show()
    }

    function popperMouseleave () {
      hide()
    }

    function createInstance () {
      instance = createPopper(reference.value, popper.value, {
        placement: props.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: props.offset
            }
          }
          // {
          //   name: 'arrow',
          //   options: {
          //     element: arrow.value
          //   }
          // }
        ]
      })
    }
    function show () {
      showTimeout = setTimeout(async () => {
        visible.value = true
        window.clearTimeout(hideTimeout)
        window.clearTimeout(visibleTimeout)
        popper.value.style.display = null
        await instance.update()
        popper.value.style.opacity = 1
      }, props.showDelay)
    }

    function hide () {
      visible.value = false
      window.clearTimeout(showTimeout)
      hideTimeout = setTimeout(() => {
        if (!visible.value) {
          popper.value.style.opacity = 0
          visibleTimeout = setTimeout(() => {
            popper.value.style.display = 'none'
          }, 200)
        }
      }, props.hideDelay)
    }

    function getPopperClass () {
      return props.popperClass ? `s-popper ${props.popperClass}` : 's-popper'
    }

    return {
      isInit,
      reference,
      popper,
      // arrow,
      getPopperClass
    }
  }
})
</script>
