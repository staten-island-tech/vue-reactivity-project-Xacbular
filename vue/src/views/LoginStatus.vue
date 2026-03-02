<template>
  <div>
    <form action="submit" @submit.prevent="login(user)">
      <label for="username">Username</label>
      <input type="text" v-model="user.username" />
      <label for="password">Password</label>
      <input type="password" v-model="user.password" />
      <button @click="login" type="submit">Login</button>
    </form>
    <h2 v-if="LoggedIn">{{ user.username }}</h2>
    <h2 v-else>Please Login</h2>
  </div>
</template>

<script setup>
//create variable LoggedIn = false, create fuction logic console log usera nd changed LoggedIn to true
import { ref, reactive } from 'vue'
const user = reactive({ username: '', password: '' })
const LoggedIn = ref(false)

function login() {
  console.log(user)
  LoggedIn.value = true
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
}
label {
  margin-bottom: 5px;
}
input {
  margin-bottom: 10px;
}
</style>
