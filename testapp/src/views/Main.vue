<template>
    <div class="tab">
        Archive component
    </div>
    <router-view></router-view>
</template>
<script setup>

import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
onMounted(() => {
    console.log(`the Archivecomponent is now mounted.`)
})
onUnmounted(() => console.log(`the Archivecomponent is now unmounted.`))
onActivated(() => console.log(`the Archivecomponent is now activated.`))
import {ref} from 'vue'
const count = ref(0)
const addCount= ()=>count.value++
// onDeactivated()(() => console.log(`the Archivecomponent is now deactivated.`))
</script>
