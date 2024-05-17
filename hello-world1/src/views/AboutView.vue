<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ $route.params.id }}
    {{ $route.query }}
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route)
  },
}
</script>
