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
        click 方式
      </template>
    </s-popper>
  </div>
</template>
