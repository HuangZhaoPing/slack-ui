import { defineComponent, h, nextTick, Fragment, onMounted } from 'vue'

export default defineComponent({
  name: 'STooltip',
  setup () {
    onMounted(() => {

    })
  },
  render () {
    if (this.$slots.default) {
      const xx = this.$slots.default!()
      const vnode = h(Fragment, null, [xx])
      return vnode
    }
  }
})
