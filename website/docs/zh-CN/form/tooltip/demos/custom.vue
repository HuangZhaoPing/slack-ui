<template>
  <div>
    <s-tooltip placement="right" theme="light">
      <s-button type="primary">自定义内容</s-button>
      <template #content>
        <h1>我是标题</h1>
        <div>我是内容</div>
      </template>
    </s-tooltip>
  </div>
</template>
