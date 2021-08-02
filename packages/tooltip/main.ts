import {
  defineComponent,
  h,
  Fragment,
  Teleport,
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
  name: 'STooltip',
  props: {
    theme: {
      type: String,
      default: 'light'
    },
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
    }
  },
  setup (props, { slots }) {
    let instance: Instance
    const reference:Ref = ref(null)
    const popper: Ref = ref(null)
    const arrow: Ref = ref(null)
    onMounted(() => {
      const dom = reference.value.nextSibling
      instance = createPopper(dom, popper.value, {
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

      dom.addEventListener('mouseenter', onMouseenter)
      dom.addEventListener('mouseleave', onMouseleave)
    })
    function onMouseenter () {
      popper.value.classList.add('s-tooltip--block')
      instance.update()
    }
    function onMouseleave () {
      popper.value.classList.remove('s-tooltip--block')
    }
    return {
      reference,
      popper,
      arrow,
      onMouseenter,
      onMouseleave
    }
  },
  render () {
    if (this.$slots.default) {
      const popperClass = ['s-tooltip--content', `s-tooltip--${this.theme}`]
      return h(Fragment, null, [
        h(this.$slots.default, { ref: 'reference' }),
        h(Teleport as any, { to: 'body', disabled: !this.appendToBody }, h('div', { ref: 'popper', class: popperClass }, [h(this.$slots.content!), h('div', { ref: 'arrow', class: 's-tooltip--arrow' })]))
      ])
    }
    return h(Fragment)
  }
})
