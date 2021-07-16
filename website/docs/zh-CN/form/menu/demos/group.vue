<template>
  <s-menu default-active="3" mode="vertical">
    <s-menu-item value="1">菜单一</s-menu-item>
    <s-menu-group>
      <template #title>分组一</template>
      <s-menu-item value="2">分组一菜单</s-menu-item>
    </s-menu-group>
    <s-menu-item value="3">菜单三</s-menu-item>
  </s-menu>
</template>
