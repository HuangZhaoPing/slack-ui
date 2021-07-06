<template>
  <div class="s-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SButtonGroup'
};
</script>

<style scoped lang="scss">
$width: 10px;

.red {
  font-size: $width;
}
</style>