<template>
    <div class="tab">
        Posts component
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
onMounted(() => {
    console.log(`the Postscomponent is now mounted.`)
})
onUnmounted(() => console.log(`the Postscomponent is now unmounted.`))
onActivated(() => console.log(`the Postscomponent is now activated.`))
// onDeactivated()(() => console.log(`the Postscomponent is now deactivated.`))
</script>