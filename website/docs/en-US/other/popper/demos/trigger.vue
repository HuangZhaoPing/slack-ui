<template>
  <div>
    <s-popper trigger="hover">
      <s-button>hover mode</s-button>
      <template #popper>
        This is a text, this is a text, this is a text, this is a text
      </template>
    </s-popper>

    <s-popper trigger="click">
      <s-button>click mode</s-button>
      <template #popper>
        This is a text, this is a text, this is a text, this is a text
      </template>
    </s-popper>
  </div>
</template>
