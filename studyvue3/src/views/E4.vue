<script setup lang="ts">
import { ref } from "vue";
const user = ref({
  name: "张三",
  age: 18,
  sex: "男",
  fav: ["游泳", "打球"],
});

function saveUser() {
  console.log(user.value);
}
</script>
<template>
  <div class="outer">
    <div>
      <label for="">请输入姓名</label>
      <input type="text" v-model="user.name" />
    </div>
    <div>
      <label for="">请输入年龄</label>
      <input type="text" v-model="user.age" />
    </div>
    <div>
      <label for="">请选择性别</label>
      男 <input type="radio" value="男" v-model="user.sex" /> 女
      <input type="radio" value="女" v-model="user.sex" />
    </div>
    <div>
      <label for="">请选择爱好</label>
      游泳 <input type="checkbox" value="游泳" v-model="user.fav" /> 打球
      <input type="checkbox" value="打球" v-model="user.fav" /> 健身
      <input type="checkbox" value="健身" v-model="user.fav" />
    </div>
    <div>
      <input type="button" value="保存" @click="saveUser" />
    </div>
  </div>
</template>

<style scoped>
div {
  margin-bottom: 8px;
}
.outer {
  width: 100%;
  position: relative;
  padding-left: 80px;
}
label {
  text-align: left;
  width: 100px;
  display: inline-block;
  position: absolute;
  left: 0;
}
</style>
