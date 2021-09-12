<template>
  <div>
    <div class="container">
      <s-menu active="3">
        <s-menu-item value="1">menu1</s-menu-item>
        <s-menu-item value="2">menu2</s-menu-item>
        <s-menu-item value="3">menu3</s-menu-item>
      </s-menu>
    </div>
    <div class="container">
      <s-menu active="3" mode="vertical" theme="dark">
        <s-menu-item value="1">menu1</s-menu-item>
        <s-menu-item value="2">menu2</s-menu-item>
        <s-menu-item value="3">menu3</s-menu-item>
      </s-menu>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: inline-block;
  margin-right: 60px;
  width: 200px;
}
</style>
