<template>
    <div class="tab">
        Posts component
        <button @click="goBook">切换页面</button>
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
onMounted(() => {
    console.log(`the Postscomponent is now mounted.`)
    console.log(router)
    console.log(route)
    console.log(route.meta)
    console.log(route.matched)
})
onUnmounted(() => console.log(`the Postscomponent is now unmounted.`))
onActivated(() => console.log(`the Postscomponent is now activated.`))
// onDeactivated()(() => console.log(`the Postscomponent is now deactivated.`))
const goBook = () => {
    router.push('/main/book')
}
</script>