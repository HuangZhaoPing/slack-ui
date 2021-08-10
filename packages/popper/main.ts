import {
  defineComponent,
  h,
  Fragment,
  Teleport,
  ref,
  Ref,
  PropType,
  Slot,
  nextTick,
  VNode,
  RendererNode,
  RendererElement,
  computed
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
  setup (props) {
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
      await nextTick()
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

function getFirstVNode (slot: Slot | undefined) {
  if (slot) {
    let vnode = slot()[0]
    while (vnode.children && vnode.props && vnode.props.key === '_default') {
      vnode = (<VNode<RendererNode, RendererElement, { [key: string]: any}>[]>vnode.children)[0]
    }
    return vnode
  }
  return null
}
