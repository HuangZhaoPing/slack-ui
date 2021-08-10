<template>
  <div>
    <s-popper ref="xx">
      <span @click="show">hello</span>
      <template #popper>
        asdf
      </template>
    </s-popper>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const xx = ref(null)
    return {
      xx,
      show () {
        xx.value.show()
      }
    }
  }
}
</script>
