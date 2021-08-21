<template>
  <div>
    <s-tooltip :append-to-body="false" placement="top-start" content="top left 提示文字">
      <s-button>top start</s-button>
    </s-tooltip>

    <s-tooltip placement="top" content="top center 提示文字">
      <s-button>top center</s-button>
    </s-tooltip>

    <s-tooltip placement="bottom" content="bottom-center">
      <s-button>bottom center</s-button>
    </s-tooltip>

    <s-tooltip placement="left" content="left center">
      <s-button>left center</s-button>
    </s-tooltip>

    <s-tooltip placement="bottom-end" content="这是一段文字这是一段文字">
      <span style="margin-left: 20px;">这是一段文字</span>
    </s-tooltip>
  </div>
</template>
