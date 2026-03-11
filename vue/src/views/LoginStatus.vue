<template>
  <div class="login-page">
    <div class="login-page__card">
      <h1 class="login-page__title">Login</h1>

      <form class="login-page__form" @submit.prevent="handleLogin" v-if="!store.currentUser">
        <label for="username" class="login-page__label">Username</label>
        <input id="username" type="text" v-model="user.username" class="login-page__input" />

        <label for="password" class="login-page__label">Password</label>
        <input id="password" type="password" v-model="user.password" class="login-page__input" />

        <button type="submit" class="login-page__button">Login</button>
      </form>

      <div v-else class="login-page__profile">
        <h2 class="login-page__welcome">Welcome, {{ store.currentUser.displayName }}</h2>
        <p class="login-page__info">Favorites: {{ favorites.length }}</p>
        <p class="login-page__info">Playlists: {{ playlists.length }}</p>
        <button class="login-page__button login-page__button--secondary" @click="store.logout()">
          Logout
        </button>
      </div>

      <p class="login-page__message" v-if="message">{{ message }}</p>

      <div class="login-page__demo">
        Demo accounts:
        <br />
        sihan / 1234
        <br />
        guest / guest
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { store, useUserFavorites, useUserPlaylists } from '@/store/musicStore'

const user = reactive({
  username: '',
  password: '',
})

const message = ref('')
const favorites = useUserFavorites()
const playlists = useUserPlaylists()

function handleLogin() {
  const success = store.login(user.username, user.password)

  if (success) {
    message.value = `Logged in as ${store.currentUser.displayName}.`
  } else {
    message.value = 'Invalid username or password.'
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4ede7;
  padding: 24px;
}

.login-page__card {
  width: 100%;
  max-width: 420px;
  background: white;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 16px 30px rgba(91, 70, 62, 0.1);
}

.login-page__title {
  margin: 0 0 20px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 34px;
  color: #2f241f;
}

.login-page__form {
  display: flex;
  flex-direction: column;
}

.login-page__label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #5c4842;
}

.login-page__input {
  margin-bottom: 14px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #d7c8c1;
  background: #fffaf6;
}

.login-page__button {
  margin-top: 8px;
  padding: 12px 16px;
  border: none;
  border-radius: 999px;
  background: #b48e88;
  color: white;
  cursor: pointer;
  font-weight: 600;
}

.login-page__button--secondary {
  background: #3f2f2b;
}

.login-page__welcome {
  margin-top: 0;
  color: #2f241f;
}

.login-page__info {
  color: #6d5b55;
}

.login-page__message {
  margin-top: 16px;
  color: #5a443d;
}

.login-page__demo {
  margin-top: 18px;
  font-size: 14px;
  color: #7b675f;
}
</style>
