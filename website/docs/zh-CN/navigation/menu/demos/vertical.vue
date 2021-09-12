<template>
  <div>
    <div class="container">
      <s-menu active="3">
        <s-menu-item value="1">菜单一</s-menu-item>
        <s-menu-item value="2">菜单二</s-menu-item>
        <s-menu-item value="3">菜单三</s-menu-item>
      </s-menu>
    </div>
    <div class="container">
      <s-menu active="3" mode="vertical" theme="dark">
        <s-menu-item value="1">菜单一</s-menu-item>
        <s-menu-item value="2">菜单二</s-menu-item>
        <s-menu-item value="3">菜单三</s-menu-item>
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
