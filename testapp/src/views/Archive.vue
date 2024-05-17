<template>
    <div class="tab">
        Archive component
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
onMounted(() => {
    console.log(`the Archivecomponent is now mounted.`)
})
onUnmounted(() => console.log(`the Archivecomponent is now unmounted.`))
onActivated(() => console.log(`the Archivecomponent is now activated.`))
// onDeactivated()(() => console.log(`the Archivecomponent is now deactivated.`))
</script>