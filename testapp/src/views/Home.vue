<template>
    <div class="tab">
        Home component
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
onMounted(() => {
    console.log(`the Homecomponent is now mounted.`)
})
onUnmounted(() => console.log(`the Homecomponent is now unmounted.`))
onActivated(() => console.log(`the Homecomponent is now activated.`))
// onDeactivated()(() => console.log(`the Homecomponent is now deactivated.`))
</script>