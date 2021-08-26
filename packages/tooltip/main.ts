import { defineComponent, h, Fragment, Ref, ref } from 'vue'
import Popper from '../popper'
import { getFirstVNode } from '../utils'

export default defineComponent({
  name: 'STooltip',
  props: {
    theme: {
      type: String,
      default: 'dark'
    },
    content: String,
    arrow: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { attrs }) {
    const instance: Ref = ref(null)

    const instanceProps = {
      ref: 'instance',
      popperClass: `s-tooltip s-tooltip--${props.theme}`,
      offset: [0, props.arrow ? 8 : 2],
      ...attrs
    }

    function getArrow () {
      return props.arrow ? h('div', { class: 's-tooltip--arrow', 'data-popper-arrow': true }) : null
    }

    return {
      instance,
      instanceProps,
      getArrow
    }
  },
  render () {
    const referenceVNode = getFirstVNode(this.$slots.default)
    if (!referenceVNode) return null
    const target = this.$slots.content ? h(this.$slots.content) : this.content
    return h(Popper, this.instanceProps, {
      default: () => h(referenceVNode),
      popper: () => h(Fragment, [h('div', null, target), this.getArrow()])
    })
  }
})
