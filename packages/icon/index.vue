<template>
  <i :class="iconClass" :style="{ fontSize: size, color }"></i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SIcon',
  props: {
    size: {
      type: String,
      default: 'inherit'
    },
    color: {
      type: String,
      default: 'inherit'
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const iconClass = computed(() => {
      return {
        's-icon': true,
        's-icon--spin': props.spin
      }
    })
    return {
      iconClass
    }
  }
})
</script>
