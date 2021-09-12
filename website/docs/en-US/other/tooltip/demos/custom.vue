<template>
  <div>
    <s-tooltip placement="right" theme="light">
      <s-button type="primary">Custom content</s-button>
      <template #content>
        <h1>I am title</h1>
        <div>I am content</div>
      </template>
    </s-tooltip>
  </div>
</template>
