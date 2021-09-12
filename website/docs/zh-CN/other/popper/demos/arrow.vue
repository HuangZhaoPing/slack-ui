<template>
  <div>
    <s-popper>
      <s-button>显示箭头</s-button>
      <template #popper>
        这是一段文字这是一段文字这是一段文字这是一段文字
      </template>
    </s-popper>

    <s-popper :arrow="false">
      <s-button>隐藏箭头</s-button>
      <template #popper>
        这是一段文字这是一段文字这是一段文字这是一段文字
      </template>
    </s-popper>
  </div>
</template>
