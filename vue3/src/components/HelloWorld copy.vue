<script setup lang="ts">
interface Book {
  title: string
  author: string
  year: number
}
defineProps<{
  msg: string
  title:string
  age:number
  book:Book
  comments:Array<number>
}>()
</script>

<template>
  <div>
    {{ msg }}
    {{ title }}
    {{ age }}
    {{ book }}
    {{ comments }}
      HelloWorld
  </div>
</template>

<style scoped>

</style>
