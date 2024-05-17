<template>
  <div class="login">
    <a-form :label-col="{ span: 6 }" autocomplete="off">
      <a-form-item label="用户名" v-bind="validateInfos.username">
        <a-input v-model:value="dto.username" />
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.password">
        <a-input-password v-model:value="dto.password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
        <a-button type="primary" @click="onClick">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { useRequest } from 'vue-request';
import { useStorage } from '@vueuse/core';
import axios from '../api/request';
import { ref, onMounted } from 'vue';
import { Form } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import {
  addServerRoutes,
  resetRoutes,
  serverMenus,
  serverToken,
  serverUsername,
} from '../router/a6router';
let obj = {
  age: 20,
  a: 15
}
const dto = ref({ username: '', password: '' });
const router = useRouter();

const { runAsync: login } = useRequest(
  dto => axios.post('/api/loginJwt', dto),
  { manual: true }
);
const { runAsync: menu } = useRequest(
  username => axios.get(`/api/menu/${username}`),
  { manual: true }
);
const rules = ref({
  username: [{ required: true, message: '用户名必填' }],
  password: [{ required: true, message: '密码必填' }],
});
const { validateInfos, validate } = Form.useForm(dto, rules);
async function onClick() {
  const loginResp = await login(dto.value);
  resetRoutes();
  console.log(loginResp);
  const token = loginResp.data.data.token;
  serverToken.value = token;
  serverUsername.value = getUsername(token);
  const menuResp = await menu(serverUsername.value);
  console.log(menuResp);
  serverMenus.value = menuResp.data.data.menuTree;
  addServerRoutes(menuResp.data.data.routeList);
  router.push('/');
}
function getUsername(token: string) {
  console.log(token);
  console.log(typeof token);
  if (!token) {
    return '';
  }
  const s = token.split('.');
  return JSON.parse(atob(s[1])).sub;
}
onMounted(() => {
  resetRoutes();
});
</script>

<style scoped>
.login {
  margin: 200px auto;
  width: 300px;
  padding: 20px;
  height: 180px;
  background-color: antiquewhite;
}
</style>
