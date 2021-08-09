<template>
  <div>
    <s-popper ref="instance">
      <div>

      <span @click="show">hello</span>
      </div>

      <template #popper>
        我的是是是是是是是是比经工在百工工工地
        <h1>我的是是是是</h1>
        我的是是是是
        <h1>我的是是是是</h1>
      </template>
    </s-popper>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const instance = ref(null)
    function show () {
      instance.value.show()
    }
    return {
      instance,
      show
    }
  }
}
</script>
