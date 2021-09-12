<template>
  <div>
    <s-popper placement="top">
      <s-button type="success">top</s-button>
      <template #popper>
        这是一段文字这是一段文字这是一段文字这是一段文字
      </template>
    </s-popper>

    <s-popper placement="bottom">
      <s-button type="success">bottom</s-button>
      <template #popper>
        这是一段文字这是一段文字这是一段文字这是一段文字
      </template>
    </s-popper>

    <s-popper placement="left">
      <s-button type="success">left</s-button>
      <template #popper>
        这是一段文字这是一段文字这是一段文字这是一段文字
      </template>
    </s-popper>

    <s-popper placement="right">
      <s-button type="success">right</s-button>
      <template #popper>
        这是一段文字这是一段文字这是一段文字这是一段文字
      </template>
    </s-popper>
  </div>
</template>
