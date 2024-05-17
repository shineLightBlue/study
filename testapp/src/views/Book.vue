<template>
    <div class="tab">
        Book
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import { useRouter, useRoute } from 'vue-router'

onMounted(() => {
    console.log(`the Archivecomponent is now mounted.`)
})
onUnmounted(() => console.log(`the Archivecomponent is now unmounted.`))
onActivated(() => console.log(`the Archivecomponent is now activated.`))
// onDeactivated()(() => console.log(`the Archivecomponent is now deactivated.`))
const route = useRoute()
console.log(route.matched)
</script>