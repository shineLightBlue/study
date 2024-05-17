<template>
  <div class="container">
    <div class="card">
      <div>
        <p class="name">{{ name }}</p>
        <p class="location">{{ country }}</p>
      </div>
      <img :src="avatar || '/src/assets/vue.svg'" />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ name: string; country: string; avatar?: string }>();
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row-reverse;
}
.name {
  font-weight: bold;
}
.location {
  font-size: 0.8em;
  color: #6d597a;
}
.card {
  display: flex;
  justify-content: space-evenly;
  padding: 1em;
  margin: 1rem;
  border-radius: 5px;
  background: #fff;
  width: 200px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.card:hover {
  transform: rotate(-5deg);
}

.card img {
  margin-left: 1em;
  border-radius: 50%;
  max-width: 55px;
  max-height: 55px;
}
</style>
