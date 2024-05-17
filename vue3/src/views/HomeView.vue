<script setup lang="ts">
import {ref,toRef,reactive,toRefs} from 'vue'
const comments = ref([1,3,5,7,9])
// const title = ref('abc')
const age = ref(20)
const msg = ref('haha')
const book = reactive({
  title:'xiaoshuo',
  author:'liu',
  year:20
})
const {title,author,year} = toRefs(book)
// const title1= toRef(book,'title')
// const test = ref(book.title)
function change(val:any){
 title.value='bbbbbbbbbbb'
 author.value='xxxxxxxxxx'
 year.value=33333333
}
// function update(val:any){
//   console.log(val)
// }
// function submit(val:any){
//   console.log(val)
// }
</script>

<template>
  <div>
    <!-- <Hello  @change="change" @update="update" @submit="submit"></Hello>
    <Hello></Hello> -->
    <!-- <Hello :title="book.title"></Hello> -->
    {{ title }}
    {{ author }}
    {{ year }}
    {{ book }}
    <button @click="change">change</button>
  </div>
</template>
