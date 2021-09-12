<template>
  <div>
    <s-input />

    <test><s-button>a</s-button></test>
    <test><span>hello</span></test>
  </div>
</template>

<script>
import test from './test'

export default {
  components: {
    test
  }
}
</script>
