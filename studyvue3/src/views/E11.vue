<template>
  <h3>X: {{ x }}</h3>
  <h3>Y: {{ y }}</h3>

  <h3>{{ count }}</h3>
  <input type="button" @click="inc()" value="+" />
  <input type="button" @click="dec()" value="-" />

  <input type="text" v-model="name" />
</template>
<script setup lang="ts">
import { useMouse, useCounter, useStorage } from "@vueuse/core";

const { x, y } = useMouse();

const { count, inc, dec } = useCounter();

const name = useStorage("name", "");
</script>
