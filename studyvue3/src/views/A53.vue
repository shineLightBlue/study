<template>
  <div class="a53">
    <a-layout>
      <a-layout-header>
        <!-- <Hello></Hello> -->
        <!-- <Hi msg="Hi"></Hi> -->
      </a-layout-header>
      <a-layout>
        <a-layout-sider>
          <a-menu theme="dark" mode="inline">
            <a-menu-item :key="1">
              <template #icon>
                <a-icon icon="highlight-outlined"></a-icon>
              </template>
              <router-link to="/a3/student">菜单1</router-link>
            </a-menu-item>
            <a-menu-item :key="2">
              <template #icon>
                <a-icon icon="align-center-outlined"></a-icon>
              </template>
              <router-link to="/a3/teacher">菜单2</router-link>
            </a-menu-item>
            <a-menu-item :key="3">
              <template #icon>
                <a-icon icon="strikethrough-outlined"></a-icon>
              </template>
              菜单3
            </a-menu-item>
            <a-sub-menu :key="4" title="菜单4">
              <template #icon>
                <a-icon icon="sort-descending-outlined"></a-icon>
              </template>
              <a-menu-item :key="41">菜单41</a-menu-item>
              <a-menu-item :key="42">菜单42</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import AIcon from "../components/AIcon1.vue"; // 单文件组件实现
// import AIcon from '../components/AIcon2' // 函数式组件实现
// import AIcon from "../components/AIcon3"; // jsx 组件实现
// import Hello from "../components/Hello";
// import Hi from "../components/Hi";
</script>
<style scoped>
.a53 {
  height: 100%;
  background-color: rgb(220, 225, 255);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='35' y='10' font-size='14' font-family='system-ui, sans-serif' text-anchor='middle' dominant-baseline='middle'%3EA53(主页)%3C/text%3E%3C/svg%3E");
  padding: 20px;
  box-sizing: border-box;
}
.ant-layout-header {
  height: 50px;
  background-color: darkseagreen;
}

.ant-layout-sider {
  background-color: lightsalmon;
}

.ant-layout-content {
  background-color: aliceblue;
}

.ant-layout-footer {
  background-color: darkslateblue;
  height: 30px;
}

.ant-layout {
  height: 100%;
}

.ant-layout-has-sider {
  height: calc(100% - 50px);
}
</style>
