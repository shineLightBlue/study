<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slot name="top" />
    <slot name="bottom" />333
    <slot :msg="msg" :rows="obj.rows" />
    333
    <slot name="test" :obj1="obj1" />
    <slot name="test" :msg="obj1.msg" :rows="obj1.rows" />
    <slot />

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      obj: {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur placeat qui perferendis harum explicabo id. Est eveniet odit amet tenetur. Mollitia earum voluptatum est obcaecati enim, reiciendis accusamus cum!",
        rows: [{ name: "abc", age: 20, major: "electrical" }],
      },
      obj1: {
        msg: "1111Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur placeat qui perferendis harum explicabo id. Est eveniet odit amet tenetur. Mollitia earum voluptatum est obcaecati enim, reiciendis accusamus cum!",
        rows: [{ name: "1111abc", age: 20, major: "electrical" }],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
