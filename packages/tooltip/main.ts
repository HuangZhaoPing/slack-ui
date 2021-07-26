import { defineComponent, h, Fragment, onMounted, ref, Ref } from 'vue'

export default defineComponent({
  name: 'STooltip',
  setup (props, { slots }) {
    const xxx: Ref = ref(null)
    const zzz: Ref = ref(null)
    onMounted(() => {
      console.log('xxx', xxx.value)
      console.log('zzz', zzz.value)
    })
    return {
      xxx,
      zzz
    }
  },
  render () {
    if (this.$slots.default) {
      return h(Fragment, null, [
        h(this.$slots.default, { ref: 'xxx' }),
        h('div', { ref: 'zzz' })
      ])
    }
    return h('div')
  }
})
