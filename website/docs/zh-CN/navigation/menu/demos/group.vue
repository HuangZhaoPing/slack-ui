<template>
  <div>
    <div class="container">
      <s-menu active="1-1" mode="vertical">
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
    </div>

    <div class="container">
      <s-menu active="1-1" mode="vertical" theme="dark">
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
