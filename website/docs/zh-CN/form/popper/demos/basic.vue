<template>
  <div>
    <s-popper>
      <s-button>hello</s-button>
      <template #popper>
        <h2>我是标题</h2>
        <s-button type="primary">新增</s-button>
      </template>
    </s-popper>

    <s-popper :arrow="false">
      <span>hello</span>
      <template #popper>
        asdf
      </template>
    </s-popper>
  </div>
</template>
