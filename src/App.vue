<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
    font-size: 14px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
    background: #fdfdfd;
}
  ul,li{
    list-style: none;
  }
  input,textarea,button{
    outline: none;
    border:0;
    background:none;
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>
