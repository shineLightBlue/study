<script setup lang="ts">
import { ref } from "vue";
import axios from "../api/request";

const student = ref({
  name: "",
  sex: "男",
  age: 18,
});

async function addStudent() {
  console.log(student.value);
  const resp = await axios.post(`/api/students`, student.value);
  console.log(resp.data?.data);
  console.log(resp);
}
</script>
<template>
  <div>
    <div>
      <input type="text" placeholder="请输入姓名" v-model="student.name" />
    </div>
    <div>
      <label for="">请选择性别</label>
      男 <input type="radio" value="男" v-model="student.sex" /> 女
      <input type="radio" value="女" v-model="student.sex" />
    </div>
    <div>
      <input type="number" placeholder="请输入年龄" v-model="student.age" />
    </div>
    <div>
      <input type="button" value="添加" @click="addStudent" />
    </div>
  </div>
</template>
