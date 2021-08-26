<template>
  <li class="s-sub-menu">
    <popper ref="instance">
      <div class="s-sub-menu--title" @mouseenter="show" @mouseleave="hide">
        <slot name="title" />
        <arrow class="s-sub-menu--arrow" />
      </div>
      <template #popper>
        <div class="s-sub-menu--content">
          <s-menu>
            <slot />
          </s-menu>
        </div>
      </template>
    </popper>
  </li>
</template>

<script lang="ts">
import { defineComponent, inject, Ref, ref } from 'vue'
import Arrow from './Arrow.vue'
import Popper from '../popper'
import { MenuProvider } from 'types/packages'

export default defineComponent({
  name: 'SSubMenu',
  components: {
    Arrow,
    Popper
  },
  setup () {
    const instance: Ref = ref(null)
    const menuProvider = inject<MenuProvider>('menuProvider')
    console.log(menuProvider)

    async function show () {
      await instance.value.show()
    }

    async function hide () {
      // await instance.value.hide()
    }

    return {
      show,
      hide,
      instance
    }
  }
})
</script>
