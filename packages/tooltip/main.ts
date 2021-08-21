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
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 300
    }
  },
  setup (props, { attrs }) {
    const instance: Ref = ref(null)
    const animationDuration = 200
    let showTimeout: NodeJS.Timeout
    let hideTimeout: NodeJS.Timeout
    let visibleTimeout: NodeJS.Timeout

    const instanceProps = {
      ref: 'instance',
      popperClass: `s-tooltip s-tooltip--${props.theme}`,
      offset: [0, props.arrow ? 8 : 2],
      ...attrs
    }
    const referenceProps = {
      onMouseenter: () => (show()),
      onMouseleave: () => (hide())
    }
    const popperProps = {
      class: 's-tooltip--wrap',
      onMouseenter: () => (show()),
      onMouseleave: () => (hide())
    }

    function getPopperEl () {
      return instance.value.getInstance().state.elements.popper
    }
    function getArrow () {
      return props.arrow ? h('div', { class: 's-tooltip--arrow', 'data-popper-arrow': true }) : null
    }
    async function show () {
      await instance.value.show()
      clearTimeout(hideTimeout)
      clearTimeout(visibleTimeout)
      showTimeout = setTimeout(() => {
        getPopperEl().style.opacity = 1
      }, props.showDelay)
    }
    function hide () {
      clearTimeout(showTimeout)
      hideTimeout = setTimeout(() => {
        getPopperEl().style.opacity = 0
        visibleTimeout = setTimeout(() => {
          instance.value.hide()
        }, animationDuration)
      }, props.hideDelay)
    }

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
