<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ modelValue }}</h1>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="changeValue">改变value</button>
  </div>
</template>

<script setup>
const props = defineProps({
  msg: String,
  modelValue: Number,
  name: Array,
  age: Array
})
const emit = defineEmits(['update:modelValue',
  'change', 'update:name', 'update:age'])
function changeValue() {
  emit('update:modelValue', 200),
    emit('change', { name: 'city' })
  emit('update:name', [1, 2, 3])
  emit('update:age', ['香蕉'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
