<template>
  <div id="app">
    <div class="row">
      <ym-button type="primary">测试</ym-button>
      <ym-button type="success">测试</ym-button>
      <ym-button type="info">测试</ym-button>
      <ym-button type="warning">测试</ym-button>
      <ym-button type="danger">测试</ym-button>
    </div>
    <div class="row">
      <ym-button type="primary" plain >测试</ym-button>
      <ym-button type="success" plain >测试</ym-button>
      <ym-button type="info" plain >测试</ym-button>
      <ym-button type="warning" plain >测试</ym-button>
      <ym-button type="danger" plain >测试</ym-button>
    </div>
  <div class="row">
      <ym-button type="primary" plain round >测试</ym-button>
      <ym-button type="success" plain circle >测</ym-button>
      <ym-button type="primary" plain disabled @click="test">测试</ym-button>
      <ym-button type="warning" plain @click="test">测试</ym-button>
      <ym-button type="danger" plain >测试</ym-button>
    </div>
  <div class="row">
    <ym-button type="success" plain >弹框</ym-button>

  </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    test(){
      console.log(111)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row {
  padding: 10px 0;
}
</style>
