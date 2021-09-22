<template>
  <ul class="anchor" ref="anchorRef">
    <li
      :class="getItemClass(item)"
      v-for="(item, index) in data"
      :key="index"
      :style="{ paddingLeft: `${item.level * 20}px` }">
      <a class="anchor--link" :href="`#${item.id}`" @click="onClick(item)">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'
import { AnchorItem } from 'types/website'

export default defineComponent({
  props: {
    data: Array,
    modelValue: String
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    function getItemClass (item: AnchorItem) {
      return {
        'anchor--item': true,
        'anchor--item--active': item.id === props.modelValue
      }
    }
    function onClick (item: AnchorItem) {
      emit('update:modelValue', item.id)
    }
    return {
      getItemClass,
      onClick
    }
  }
})
</script>

<style lang="scss" scoped>
.anchor {
  list-style: none;
  margin: 0;
  margin-top: 20px;
  padding: 0;
}

.anchor--item {
  border-left: 2px solid transparent;
  box-sizing: border-box;
  color: #4b5563;
  font-size: 12px;
  padding: 0 20px;
  position: relative;
  transition: border-color 0.2s, color 0.2s;
}

.anchor--item:hover,
.anchor--item--active {
  border-color: #60a5fa;
  color: #60a5fa;
}

.anchor--link {
  color: inherit;
}
</style>
