<script setup lang="ts">
interface Book {
  title: string
  author: string
  year: number
}
defineProps<{
  msg: string
  title: string
  age: number
  book: Book
  comments: Array<number>
}>()
const emit = defineEmits<{
  (e: 'change', id: Array<number>): void
  (e: 'update', value: string): void
  (e: 'submit', payload: { email: string, password: string }): void
}>()
function buttonClick() {
  emit("change", [20,30,40,50])
  emit("update", 'abc')
  emit("submit", { email: "abc", password: 'cba' })
}
</script>

<template>
  <div>
    <!-- {{ msg }} -->
    {{ title }}
    <!-- {{ age }} -->
    <!-- {{ book }} -->
    <!-- {{ comments }} -->
    <!-- HelloWorld -->
    <button @click="buttonClick">触发事件</button>
  </div>
</template>

<style scoped></style>
