<template>
  <div>
    <s-popper>
      <s-button>hover</s-button>
      <template #popper>
        hover 方式
      </template>
    </s-popper>

    <s-popper :arrow="false" trigger="click">
      <s-button>click</s-button>
      <template #popper>
        这是一段文字这是一段文字这是一段文字这是一段文字
      </template>
    </s-popper>

    <s-popper :arrow="false" trigger="click">
      <s-button>click</s-button>
      <template #popper>
        这是一段文字这是一段文字这是一段文字这是一段文字
      </template>
    </s-popper>
  </div>
</template>
