import {
  defineComponent,
  h,
  Fragment,
  Teleport,
  ref,
  Ref,
  PropType,
  nextTick,
  withDirectives,
  vShow,
  Transition
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
    popperClass: String,
    showDelay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 300
    }
  },
  setup (props) {
    let instance: Instance
    const created = ref(false)
    const visible = ref(false)
    const reference: Ref = ref(null)
    const popper: Ref = ref(null)
    let showTimeout: NodeJS.Timeout
    let hideTimeout: NodeJS.Timeout

    const referenceProps = {
      ref: 'reference',
      onMouseenter: show,
      onMouseleave: hide
    }
    const transitionProps = {
      name: 'fade',
      onBeforeEnter: update
    }
    const popperProps = {
      ref: 'popper',
      class: props.popperClass ? `s-popper ${props.popperClass}` : 's-popper',
      onMouseenter: () => clearTimeout(hideTimeout),
      onMouseleave: hide
    }
    const teleportProps = {
      to: 'body',
      disabled: !props.appendToBody
    }

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
      clearTimeout(hideTimeout)
      if (!created.value) {
        created.value = true
        await nextTick()
        await createInstance()
      }
      showTimeout = setTimeout(() => (visible.value = true), props.showDelay)
    }
    function hide () {
      clearTimeout(showTimeout)
      hideTimeout = setTimeout(() => (visible.value = false), props.hideDelay)
    }
    function update () {
      instance.update()
    }

    return {
      created,
      visible,
      reference,
      popper,
      getInstance,
      show,
      hide,
      referenceProps,
      transitionProps,
      popperProps,
      teleportProps
    }
  },
  render () {
    let reference = null
    let popper = null
    const referenceVNode = getFirstVNode(this.$slots.default)
    if (referenceVNode) reference = h(referenceVNode, this.referenceProps)
    if (this.created && this.$slots.popper) {
      const transition = h(
        Transition,
        this.transitionProps,
        {
          default: () => withDirectives(
            h('div', this.popperProps, h(this.$slots.popper!)),
            [[vShow, this.visible]]
          )
        }
      )
      popper = h(Teleport, this.teleportProps, transition)
    }
    return h(Fragment, null, [reference, popper])
  }
})
