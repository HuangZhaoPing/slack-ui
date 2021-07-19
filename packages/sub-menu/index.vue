<template>
  <li class="s-sub-menu">
    <div class="s-sub-menu__title">
      <slot name="title" />

      <svg viewBox="0 0 1024 1024" width="0.9rem" height="0.9rem"><path d="M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z" p-id="21302"></path></svg>
    </div>
    <div v-show="false" class="s-sub-menu__main">
      <slot />
    </div>
  </li>
</template>

<script>
export default {
  name: 'SSubMenu'
}
</script>
