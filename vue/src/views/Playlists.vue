<template>
  <div class="playlists-page">
    <div class="playlists-page__header">
      <div>
        <h1 class="playlists-page__title">Your Playlists</h1>
        <p class="playlists-page__subtitle">Organize your songs into custom collections.</p>
      </div>

      <button class="playlists-page__create-button" @click="createPlaylist">+</button>
    </div>

    <div v-if="!store.currentUser" class="playlists-page__empty">
      <h2 class="playlists-page__empty-title">Please log in.</h2>
      <p class="playlists-page__empty-text">
        You need to log in before you can view or create playlists.
      </p>
    </div>

    <div v-else-if="playlists.length === 0" class="playlists-page__empty">
      <h2 class="playlists-page__empty-title">No playlists found.</h2>
      <p class="playlists-page__empty-text">Create your first playlist using the + button.</p>
    </div>

    <div v-else class="playlists-page__grid">
      <div v-for="playlist in playlists" :key="playlist.id" class="playlists-page__card">
        <h2 class="playlists-page__card-title">{{ playlist.name }}</h2>
        <p class="playlists-page__card-count">
          {{ playlist.songs.length }} song<span v-if="playlist.songs.length !== 1">s</span>
        </p>

        <ul class="playlists-page__song-list" v-if="playlist.songs.length > 0">
          <li v-for="song in playlist.songs" :key="song.id" class="playlists-page__song-item">
            {{ song.title }} — {{ song.artist }}
          </li>
        </ul>

        <p v-else class="playlists-page__card-empty">This playlist is empty.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { store, useUserPlaylists } from '@/store/musicStore'

const playlists = useUserPlaylists()

function createPlaylist() {
  if (!store.currentUser) return

  const playlistName = window.prompt('Enter a playlist name:')
  if (!playlistName) return

  store.createPlaylist(playlistName)
}
</script>

<style scoped>
.playlists-page {
  min-height: 100vh;
  padding: 28px;
  background: #f7f1eb;
  color: #2f241f;
}

.playlists-page__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.playlists-page__title {
  margin: 0;
  font-size: 38px;
  font-family: Georgia, 'Times New Roman', serif;
}

.playlists-page__subtitle {
  margin: 8px 0 0;
  color: #6d5b55;
}

.playlists-page__create-button {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: #b48e88;
  color: white;
  font-size: 28px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.playlists-page__empty {
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 8px 22px rgba(91, 70, 62, 0.08);
}

.playlists-page__empty-title {
  margin: 0 0 10px;
  font-family: Georgia, 'Times New Roman', serif;
}

.playlists-page__empty-text {
  margin: 0;
  color: #6d5b55;
}

.playlists-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.playlists-page__card {
  background: white;
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 10px 20px rgba(91, 70, 62, 0.08);
}

.playlists-page__card-title {
  margin: 0 0 8px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 26px;
}

.playlists-page__card-count {
  margin: 0 0 14px;
  color: #7a665f;
}

.playlists-page__song-list {
  margin: 0;
  padding-left: 18px;
}

.playlists-page__song-item {
  margin-bottom: 8px;
  color: #4d3b35;
}

.playlists-page__card-empty {
  margin: 0;
  color: #8d7870;
}
</style>
