<template>
  <div>
    <s-link
      v-for="item in list"
      :key="item.type"
      :type="item.type"
      href="https://www.baidu.com"
      target="__blank">
      {{ item.text }}
    </s-link>
  </div>
</template>

<script>
export default {
  setup () {
    return {
      list: [
        { type: 'default', text: 'default link' },
        { type: 'primary', text: 'primary link' },
        { type: 'success', text: 'success link' },
        { type: 'danger', text: 'danger link' }
      ]
    }
  }
}
</script>
