<template>
  <s-menu default-active="1-1" mode="vertical">
    <s-menu-group>
      <template #title>group1</template>
      <s-menu-item value="1-1">item1</s-menu-item>
      <s-menu-item value="1-2">item2</s-menu-item>
    </s-menu-group>
    <s-menu-group>
      <template #title>group2</template>
      <s-menu-item value="2-1">item1</s-menu-item>
      <s-menu-item value="2-2">item2</s-menu-item>
    </s-menu-group>
    <s-menu-group>
      <template #title>group3</template>
      <s-menu-item value="3-1">item1</s-menu-item>
      <s-menu-item value="3-2">item2</s-menu-item>
    </s-menu-group>
  </s-menu>
</template>
