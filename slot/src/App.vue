<template>
  <div id="app">
    <HelloWorld msg="abc">
      <template #default="{ msg, rows }">
        <h5>我是h5 -- {{ msg }},{{ rows }}</h5>
      </template>
      <!-- <a href="#">我是a</a>
      <h4>我是h4</h4> -->
      <template v-slot:top>
        <a href="#">我是a标签</a>
        <button>我是按钮</button>
      </template>
      <template #bottom>
        <h4>我是h4444</h4>
      </template>

      <template #test="obj">
        <h5>我是h5第二个 -- {{ obj }}</h5>
      </template>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
