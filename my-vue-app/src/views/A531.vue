<template>
    <div class="a531">
        <input type="button" @click="test" value="添加路由" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function test() {
    console.log(router);
    router.addRoute('main', {
        path: '/a3/aaa',
        component: () => import('../views/E0.vue'),
    });
}
</script>
<style scoped>
.a531 {
    height: 100%;
    background-color: rgb(252, 255, 220);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='35' y='10' font-size='14' font-family='system-ui, sans-serif' text-anchor='middle' dominant-baseline='middle'%3E(学生管理)%3C/text%3E%3C/svg%3E");
    padding: 20px;
    box-sizing: border-box;
}
</style>
