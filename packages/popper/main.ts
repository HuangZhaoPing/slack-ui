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
  setup (props) {
    let instance: Instance
    const visible = ref(false)
    const reference: Ref = ref(null)
    const popper: Ref = ref(null)
    const arrow: Ref = ref(null)

    onMounted(() => {
      if (reference.value) {
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
      }
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
      popper.value.classList.add('s-popper--show')
      instance.update()
    }

    function hide () {
      popper.value.classList.remove('s-popper--show')
    }

    function getPopperClass () {
      return props.popperClass ? `s-popper ${props.popperClass}` : 's-popper'
    }

    return {
      visible,
      reference,
      popper,
      arrow,
      getPopperClass
    }
  },
  render () {
    const referenceVNode = getFirstVNode(this.$slots.default)
    let reference = null
    let popper = null
    if (referenceVNode && typeof referenceVNode.type !== 'symbol') {
      reference = h(referenceVNode, { ref: 'reference' })
    }
    if (this.visible && this.$slots.popper) {
      popper = h(
        Teleport,
        { to: 'body' },
        h(
          'div',
          { ref: 'popper', class: this.getPopperClass() },
          [
            h(this.$slots.popper),
            h('div', { ref: 'arrow', class: 's-popper--arrow' })
          ]
        )
      )
    }
    return h(Fragment, null, [reference, popper])
  }
})

function getFirstVNode (slot: Slot | undefined) {
  return slot ? slot()[0] : null
}
