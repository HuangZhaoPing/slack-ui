<template>
  <div>
    <s-tooltip content="编辑">
      <s-button>按钮</s-button>
    </s-tooltip>

    <s-tooltip theme="light" placement="top">
      <s-button>按钮</s-button>
      <template #content>
        删除
      </template>
    </s-tooltip>
  </div>
</template>

<script>
export default {

}
</script>
