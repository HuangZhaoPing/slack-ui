<template>
  <div>
    <s-link
      v-for="item in list"
      :key="item.type"
      :type="item.type"
      :underline="item.underline"
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
        { type: 'primary', text: '无下划线', underline: false },
        { type: 'success', text: '有下划线', underline: true }
      ]
    }
  }
}
</script>
