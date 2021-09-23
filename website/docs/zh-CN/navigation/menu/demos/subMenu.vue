<template>
  <div>
    <s-menu active="1" mode="horizontal">
      <s-menu-item value="1">菜单一</s-menu-item>
      <s-sub-menu value="2">
        <template #title>菜单二</template>
        <s-menu-item value="2-1">菜单二（1）</s-menu-item>
        <s-menu-item value="2-2">菜单二（2）</s-menu-item>
      </s-sub-menu>
      <s-menu-item value="3">菜单三</s-menu-item>
    </s-menu>
  </div>
</template>
