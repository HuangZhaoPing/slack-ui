<template>
  <div>
    <s-link
      v-for="item in list"
      :key="item.type"
      :type="item.type"
      disabled
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
        { type: 'default', text: '默认链接' },
        { type: 'primary', text: '主要链接' },
        { type: 'success', text: '成功链接' },
        { type: 'danger', text: '危险链接' }
      ]
    }
  }
}
</script>
