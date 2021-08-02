import {
  defineComponent,
  h,
  Fragment,
  Teleport,
  onMounted,
  ref,
  Ref,
  PropType,
  Slot,
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
        return [0, 8]
      }
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    trigger: {
      type: String,
      default: 'hover'
    }
  },
  setup (props, { slots }) {
    let instance: Instance
    const visible = ref(false)
    const reference: Ref = ref(null)
    const popper: Ref = ref(null)

    onMounted(() => {
      if (reference.value) {
        reference.value.addEventListener('mouseenter', () => {
          if (!visible.value) {
            visible.value = true
            nextTick(() => {
              instance = createPopper(reference.value, popper.value)
              instance.update()
            })
          }
        })
      }
    })

    return {
      visible,
      reference,
      popper
    }
  },
  render () {
    const referenceVNode = getFirstVNode(this.$slots.default)
    const popperVNode = getFirstVNode(this.$slots.popper)
    const reference = referenceVNode && typeof referenceVNode.type !== 'symbol' ? h(referenceVNode, { ref: 'reference' }) : null
    const popper = this.visible && popperVNode ? h(Teleport, { to: 'body' }, h('div', { ref: 'popper' }, h(popperVNode))) : null
    return h(Fragment, null, [reference, popper])
  }
})

function getFirstVNode (slot: Slot | undefined) {
  return slot ? slot()[0] : null
}
