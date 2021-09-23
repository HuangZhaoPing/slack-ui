<template>
  <li class="s-sub-menu">
    <popper ref="instance" :arrow="false">
      <div class="s-sub-menu--title">
        <slot name="title" />
        <arrow class="s-sub-menu--arrow" />
      </div>
      <template #popper>
        <div class="s-sub-menu--popper">
          <slot />
        </div>
      </template>
    </popper>
  </li>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import Arrow from './Arrow.vue'
import Popper from '../popper'

export default defineComponent({
  name: 'SSubMenu',
  components: {
    Arrow,
    Popper
  },
  setup () {
    const instance: Ref = ref(null)

    return {
      instance
    }
  }
})
</script>
