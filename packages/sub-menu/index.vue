<template>
  <li class="s-sub-menu">
    <div class="s-sub-menu__title">
      <slot name="title" />
      <arrow class="s-sub-menu__arrow" />
    </div>
    <div v-show="false" class="s-sub-menu__content">
      <slot />
    </div>
  </li>
</template>

<script>
import Arrow from './Arrow.vue'

export default {
  name: 'SSubMenu',
  components: {
    Arrow
  }
}
</script>
