<template>
  <main class="home-page">
    <nav class="home-page__nav">
      <h1 class="home-page__brand">CoffeeBeats</h1>

      <div class="home-page__links">
        <router-link to="/" class="home-page__link">Home</router-link>
        <router-link to="/songs" class="home-page__link">Songs</router-link>
        <router-link to="/playlists" class="home-page__link">Playlists</router-link>
      </div>

      <router-link
        to="/login"
        class="home-page__profile"
        :title="store.currentUser ? 'Profile' : 'Log in'"
      >
        <span v-if="store.currentUser">{{ store.currentUser.displayName.charAt(0) }}</span>
        <span v-else>?</span>
      </router-link>
    </nav>

    <section class="home-page__hero">
      <div class="home-page__hero-content">
        <p class="home-page__eyebrow">Curated sounds for calm days</p>
        <h2 class="home-page__title">Sweet moments start here.</h2>
        <p class="home-page__description">
          A cozy music app where you can play songs, favorite tracks, and build your own playlists.
        </p>

        <div class="home-page__actions">
          <router-link to="/songs" class="home-page__button home-page__button--primary">
            Explore Songs
          </router-link>
          <router-link to="/playlists" class="home-page__button home-page__button--secondary">
            Your Playlists
          </router-link>
        </div>
      </div>

      <div class="home-page__hero-visual">
        <img src="/images/example.jpg" alt="Featured music cover" class="home-page__hero-image" />
      </div>
    </section>

    <section class="home-page__info-grid">
      <article class="home-page__card">
        <h3 class="home-page__card-title">Now Playing</h3>
        <p class="home-page__card-text" v-if="store.nowPlaying">
          {{ store.nowPlaying.title }} — {{ store.nowPlaying.artist }}
        </p>
        <p class="home-page__card-text" v-else>No song selected yet.</p>
      </article>

      <article class="home-page__card">
        <h3 class="home-page__card-title">Favorites</h3>
        <p class="home-page__card-text">
          {{ favorites.length }} song<span v-if="favorites.length !== 1">s</span>
        </p>
      </article>

      <article class="home-page__card">
        <h3 class="home-page__card-title">Playlists</h3>
        <p class="home-page__card-text">
          {{ playlists.length }} playlist<span v-if="playlists.length !== 1">s</span>
        </p>
      </article>
    </section>
  </main>
</template>

<script setup>
import { store, useUserFavorites, useUserPlaylists } from '@/store/musicStore'

const favorites = useUserFavorites()
const playlists = useUserPlaylists()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');

.home-page {
  min-height: 100vh;
  padding: 24px;
  background: #f5efe6;
  color: #2f241f;
  font-family: Arial, Helvetica, sans-serif;
}

.home-page__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  gap: 20px;
}

.home-page__brand {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 32px;
  margin: 0;
}

.home-page__links {
  text-decoration: bold;
  margin-left: 500px;
  font-size: 20px;
  display: flex;
  gap: 50px;
  font-family: Georgia, 'Times New Roman', serif;
}

.home-page__link {
  text-decoration: none;
  color: #4d3b35;
  font-weight: 500;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s;
}

.home-page__link:hover {
  color: #1f1714;
}

.home-page__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #b88d83;
  transition: width 0.3s ease;
}

.home-page__link:hover::after {
  width: 100%;
}

.home-page__profile {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #b88d83;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

.home-page__hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  background: #b48e88;
  border-radius: 28px;
  padding: 36px;
  margin-bottom: 26px;
  color: #fff8f4;
}

.home-page__eyebrow {
  margin: 0 0 10px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.9;
}

.home-page__title {
  margin: 0 0 16px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 58px;
  line-height: 0.95;
}

.home-page__description {
  max-width: 500px;
  font-size: 16px;
  line-height: 1.6;
}

.home-page__actions {
  display: flex;
  gap: 12px;
  margin-top: 22px;
  flex-wrap: wrap;
}

.home-page__button {
  text-decoration: none;
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s;
}

.home-page__button:hover {
  transform: translateY(-2px);
}

.home-page__button--primary {
  background: #fff3eb;
  color: #5f4039;
}

.home-page__button--secondary {
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.home-page__hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-page__hero-image {
  width: 100%;
  max-width: 320px;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 18px 32px rgba(0, 0, 0, 0.18);
}

.home-page__info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.home-page__card {
  background: #fdf8f3;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(91, 70, 62, 0.08);
}

.home-page__card-title {
  margin: 0 0 10px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 24px;
}

.home-page__card-text {
  margin: 0;
  color: #6d5b55;
}

@media (max-width: 850px) {
  .home-page__hero {
    grid-template-columns: 1fr;
  }

  .home-page__info-grid {
    grid-template-columns: 1fr;
  }

  .home-page__title {
    font-size: 42px;
  }
}
</style>
