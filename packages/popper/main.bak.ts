import {
  defineComponent,
  h,
  Fragment,
  Teleport,
  ref,
  Ref,
  PropType,
  nextTick,
  computed
} from 'vue'
import {
  createPopper,
  Instance,
  Placement
} from '@popperjs/core'
import { getFirstVNode } from '../utils'

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
  setup (props, { emit }) {
    let instance: Instance
    const visible = ref(false)
    const reference: Ref = ref(null)
    const popper: Ref = ref(null)

    const popperClass_ = computed(() => {
      const popperClass = props.popperClass
      return {
        's-popper': true,
        [<string>popperClass]: !!popperClass
      }
    })

    async function createInstance () {
      const el = reference.value.$el || reference.value
      instance = createPopper(el, popper.value, {
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

    async function show () {
      if (!visible.value) {
        visible.value = true
        await nextTick()
        await createInstance()
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
      popperClass_,
      show,
      hide
    }
  },
  render () {
    const referenceVNode = getFirstVNode(this.$slots.default)
    let reference = null
    let popper = null
    if (referenceVNode) reference = h(referenceVNode, { ref: 'reference' })
    if (this.visible && this.$slots.popper) {
      popper = h(
        Teleport,
        { to: 'body', disabled: !this.appendToBody },
        h('div', { ref: 'popper', class: this.popperClass_ }, h(this.$slots.popper))
      )
    }
    return h(Fragment, null, [reference, popper])
  }
})
