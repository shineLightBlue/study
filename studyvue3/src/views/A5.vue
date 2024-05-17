<template>
  <div class="a5">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.a5 {
  height: 100%;
  background-color: rgb(238, 255, 220);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='15' y='10' font-size='14' font-family='system-ui, sans-serif' text-anchor='middle' dominant-baseline='middle'%3E容器%3C/text%3E%3C/svg%3E");
  padding: 20px;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  margin: 0;
  box-sizing: border-box;
}
#app {
  height: 100%;
}
</style>
