<template>
  <div class="container">
    <h1><button @click="reset">Home</button></h1>
    <h1><button @click="reset">Notes</button></h1>
    <h1><button @click="reset">Playlist</button></h1>
    <h1><button @click="reset">About</button></h1>
    <h1><button @click="reset">Login</button></h1>
    <!-- <img @click="increment" src="/cookie.png" alt="" /> -->
  </div>
  <h2>{{ count }}</h2>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}

function reset() {
  count.value = 0
}
</script>

<style scoped>
img {
  width: 200px;
  height: auto;
  display: block;
  margin-top: 20px;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  gap: 20px;
}
button {
  height: 50px;
  width: 100px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

<!-- i dont have ideas -->
