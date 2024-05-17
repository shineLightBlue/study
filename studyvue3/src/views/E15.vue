<!-- 父组件 -->
<template>
  <Child1
    v-for="u of users"
    :name="u.name"
    :country="u.country"
    :avatar="u.avatar"
    :key="u.username"
  ></Child1>
</template>
<script setup lang="ts">
import { useRequest } from "vue-request";
import axios from "axios";
import { computed } from "vue";
import Child1 from "../components/Child1.vue";

const { data } = useRequest(() =>
  axios.get("https://randomuser.me/api/?results=3")
);
const users = computed(() => {
  return data.value?.data.results.map(resultToUser) || [];
});
interface Result {
  gender: "male" | "female";
  name: {
    first: string;
    last: string;
  };
  location: {
    country: string;
  };
  picture: {
    medium: string;
  };
  login: {
    username: string;
  };
}
function resultToUser(r: Result) {
  return {
    name: r.name.first,
    country: r.location.country,
    avatar: r.picture.medium,
    username: r.login.username,
  };
}
console.log(data);
</script>
