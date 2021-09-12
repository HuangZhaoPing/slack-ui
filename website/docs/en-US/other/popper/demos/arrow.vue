<template>
  <div>
    <s-popper>
      <s-button>Show arrow</s-button>
      <template #popper>
        This is a text, this is a text, this is a text, this is a text
      </template>
    </s-popper>

    <s-popper :arrow="false">
      <s-button>Hide arrow</s-button>
      <template #popper>
        This is a text, this is a text, this is a text, this is a text
      </template>
    </s-popper>
  </div>
</template>
