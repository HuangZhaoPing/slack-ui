<template>
  <div>
    <s-tooltip :append-to-body="false" placement="top-start" content="top left Prompt text">
      <s-button>top start</s-button>
    </s-tooltip>

    <s-tooltip placement="top" content="top center Prompt text">
      <s-button>top center</s-button>
    </s-tooltip>

    <s-tooltip placement="bottom" content="bottom-center">
      <s-button>bottom center</s-button>
    </s-tooltip>

    <s-tooltip placement="left" content="left center">
      <s-button>left center</s-button>
    </s-tooltip>

    <s-tooltip placement="bottom-end" content="This is a text. This is a text">
      <span style="margin-left: 20px;">This is a text. This is a text</span>
    </s-tooltip>
  </div>
</template>
