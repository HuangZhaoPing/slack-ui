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
    },
    showDelay: {
      type: Number,
      default: 200
    },
    hideDelay: {
      type: Number,
      default: 200
    }
  },
  setup (props, { attrs }) {
    const instance: Ref = ref(null)
    let showTimeout: NodeJS.Timeout
    let hideTimeout: NodeJS.Timeout

    const instanceProps = {
      ref: 'instance',
      popperClass: `s-tooltip s-tooltip--${props.theme}`,
      offset: [0, props.arrow ? 8 : 2],
      ...attrs
    }
    const referenceProps = {
      onMouseenter: async () => {
        await instance.value.show()
        clearTimeout(hideTimeout)
        showTimeout = setTimeout(() => {
          getPopperEl().style.opacity = 1
        }, props.showDelay)
      },
      onMouseleave: () => {
        hideTimeout = setTimeout(() => {
          getPopperEl().style.opacity = 0
          setTimeout(() => {
            instance.value.hide()
          }, 1000)
        }, props.hideDelay)
      }
    }
    const popperProps = {
      class: 's-tooltip--wrap',
      onMouseenter: () => {

      }
    }

    function getPopperEl () {
      return instance.value.getInstance().state.elements.popper
    }
    function getArrow () {
      return props.arrow ? h('div', { class: 's-tooltip--arrow', 'data-popper-arrow': true }) : null
    }

    console.log(showTimeout)
    return {
      instance,
      instanceProps,
      referenceProps,
      popperProps,
      getArrow
    }
  },
  render () {
    const referenceVNode = getFirstVNode(this.$slots.default)
    if (!referenceVNode) return null
    const target = this.$slots.content ? h(this.$slots.content) : this.content
    return h(Popper, this.instanceProps, {
      default: () => h(referenceVNode, this.referenceProps),
      popper: () => h(Fragment, [h('div', this.popperProps, target), this.getArrow()])
    })
  }
})
