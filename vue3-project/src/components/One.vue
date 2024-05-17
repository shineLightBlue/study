<script setup>
import { ref } from 'vue'
import axios from 'axios';
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'
import Two from './Two.vue'

</script>
<template>
    <div class="example2">
        <div class="example2">
            One One One
        </div>
        <div class="example3">
            One
            One
            One
            One
        </div>
        <div>
            One
            One
            One
            One
           <Two></Two>
        </div>
    </div>
</template>
<style scoped>
/* .example1 {
    color: blue;
} */
</style>