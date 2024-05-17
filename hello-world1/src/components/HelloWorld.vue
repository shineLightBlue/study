<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ value }}</h1>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ grade }}</h1>
    <h1>{{ count }}</h1>
    <h1>{{ address }}</h1>
    <button @click="changeValue">改变value </button>
  </div>
</template>

<script>
import store from '@/store'
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    value: Number,
    name: Array,
    age: Array,
    grade: Number,
    count: Number,
    address: String
  },
  ...mapActions({
    add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
  }),
  data() {
    return {

    }
  },
  methods: {
    changeValue() {
      // console.log(store.dispatch(
      //   'increment'
      // ))
      store.dispatch(
        'increment'
      )
      // this.$emit('input', 200)
      // this.$emit('change', { name: 'city' })
      // this.$emit('update:name', [1, 2, 3])
      // this.$emit('update:age', ['香蕉'])
      // this.$emit('update:grade', 5)
      // this.$emit('update:count', 50)
      // this.$emit('update:address', '广东')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {}

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
