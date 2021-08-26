import { h, Fragment, defineComponent, ref, withDirectives, Transition, vShow } from 'vue'

export default defineComponent({
  setup () {
    const show = ref(false)
    return {
      show,
      onClick: () => (show.value = !show.value)
    }
  },
  render () {
    return h(Fragment, null, [
      h('div', { onClick: this.onClick }, 'hello'),
      h(Transition, { name: 'fade' }, withDirectives(h('div', null, 'haha'), [[vShow, this.show]]))
    ])
  }
})
