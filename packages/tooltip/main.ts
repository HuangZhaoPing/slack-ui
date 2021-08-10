import { defineComponent, h } from 'vue'
import Popper from '../popper'

export default defineComponent({
  name: 'STooltip',
  render () {
    return h(Popper, { ref: 'popper' }, {
      default: h(this.$slots.default!),
      popper: this.$slots.popper!()
    })
  }
})
