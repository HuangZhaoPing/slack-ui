import { defineComponent, openBlock, createBlock, createCommentVNode, renderSlot } from 'vue';

var script = defineComponent({
  name: 'SButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    round: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  }
});

const _hoisted_1 = {
  key: 1,
  class: "s-button__content"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    disabled: _ctx.disabled,
    class: [
      's-button',
      `s-button__${_ctx.type}`,
      `s-button__${_ctx.size}`,
      (_ctx.icon && _ctx.$slots.default) && `s-button__icon__${_ctx.iconPosition}`,
      _ctx.round && 's-button__round',
      _ctx.loading && 's-button__loading',
      _ctx.block && 's-button__block'
    ]
  }, [
    (_ctx.icon)
      ? (openBlock(), createBlock("i", {
          key: 0,
          class: `s-button__icon ${_ctx.icon}`
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createBlock("span", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, ["disabled"]))
}

script.render = render;
script.__file = "packages/button/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};

export default script;
