<template>
  <div>
    <s-button loading type="primary" size="small">loading</s-button>
    <s-button loading type="success">loading</s-button>
    <s-button loading type="danger" size="large">loading</s-button>
    <s-button loading icon="iconfont icon-cloud-download" />
    <s-button loading type="primary" icon="iconfont icon-cloud-download" round />
    <s-button loading type="text">loading</s-button>

    <s-button
      :loading="loading.instance1"
      type="primary"
      @click="onClick('instance1')">
      click
    </s-button>

    <s-button
      :loading="loading.instance2"
      icon="iconfont icon-cloud-download"
      type="primary"
      @click="onClick('instance2')">
      click
    </s-button>

    <s-button
      :loading="loading.instance3"
      icon="iconfont icon-cloud-download"
      type="success"
      @click="onClick('instance3')">
      click
    </s-button>

    <s-button
      :loading="loading.instance4"
      icon="iconfont icon-cloud-download"
      type="success"
      round
      @click="onClick('instance4')" />
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup () {
    const loading = reactive({
      instance1: false,
      instance2: false,
      instance3: false,
      instance4: false
    })
    const onClick = key => {
      loading[key] = true
      setTimeout(() => {
        loading[key] = false
      }, 3000)
    }

    return {
      loading,
      onClick
    }
  }
}
</script>
