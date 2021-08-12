import { defineComponent, h, Fragment, Ref, ref } from 'vue'
import Popper from '../popper'

export default defineComponent({
  name: 'STooltip',
  setup () {
    const popper: Ref = ref(null)
    return {
      popper
    }
  },
  render () {
    return h(Popper, { ref: 'popper' }, {
      default: () => h(this.$slots.default!, {
        onClick: () => {
          console.log('sadf')
        }
      }),
      popper: () => h(Fragment, null, [h(this.$slots.popper!), h('div', null, 'sadf')])
    })
  }
})
