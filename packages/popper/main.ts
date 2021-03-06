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
  Transition,
  watch
} from 'vue'
import {
  createPopper,
  Instance,
  Placement
} from '@popperjs/core'
import { getFirstVNode, getZIndex, incrementZIndex } from '../utils'

let hideQueue: Array<() => void> = []

document.body.addEventListener('click', () => {
  excuteQueue()
})

function excuteQueue () {
  hideQueue.forEach(fn => (fn()))
  hideQueue = []
}

export default defineComponent({
  name: 'SPopper',
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom'
    },
    offset: Number,
    appendToBody: {
      type: Boolean,
      default: true
    },
    arrow: {
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
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 200
    },
    gpuAcceleration: {
      type: Boolean,
      default: true
    },
    transitionName: {
      type: String,
      default: 'fade'
    }
  },
  emits: ['show', 'hide'],
  setup (props, { emit }) {
    let instance: Instance
    const created = ref(false)
    const visible = ref(false)
    const reference: Ref = ref(null)
    const popper: Ref = ref(null)
    let showTimeout: NodeJS.Timeout
    let hideTimeout: NodeJS.Timeout
    const isHover = props.trigger === 'hover'

    const referenceProps = {
      ref: 'reference',
      onMouseenter: isHover ? show : null,
      onMouseleave: isHover ? hide : null,
      onClick: !isHover
        ? (event: Event) => {
            if (!visible.value) {
              excuteQueue()
              show()
              hideQueue.push(hide)
            } else {
              hide()
            }
            event.stopPropagation()
          }
        : null
    }
    const transitionProps = {
      name: props.transitionName,
      onBeforeEnter: update
    }
    const popperProps = {
      ref: 'popper',
      class: props.popperClass ? `s-popper ${props.popperClass}` : 's-popper',
      onMouseenter: isHover ? () => clearTimeout(hideTimeout) : null,
      onMouseleave: isHover ? hide : null,
      onClick: !isHover ? (event: Event) => event.stopPropagation() : null
    }
    const teleportProps = {
      to: 'body',
      disabled: !props.appendToBody
    }

    watch(() => visible.value, value => {
      emit(value ? 'show' : 'hide')
    })

    async function createInstance () {
      const el = reference.value.$el || reference.value
      instance = createPopper(el, popper.value, {
        placement: props.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, props.offset || 8]
            }
          },
          {
            name: 'computeStyles',
            options: {
              gpuAcceleration: props.gpuAcceleration
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
      incrementZIndex()
      popper.value.style.setProperty('z-index', getZIndex())
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
      const arrow = this.arrow ? h('div', { class: 's-popper--arrow', 'data-popper-arrow': true }) : null
      const transition = h(
        Transition,
        this.transitionProps,
        {
          default: () => withDirectives(
            h('div', this.popperProps, [h(this.$slots.popper!), arrow]),
            [[vShow, this.visible]]
          )
        }
      )
      popper = h(Teleport, this.teleportProps, transition)
    }
    return h(Fragment, null, [reference, popper])
  }
})
