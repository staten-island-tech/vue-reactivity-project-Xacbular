<template>
  <main class="songs-page">
    <section class="songs-page__header">
      <div>
        <h1 class="songs-page__title">Songs</h1>
        <p class="songs-page__subtitle">Play, favorite, and add songs to your playlists.</p>
      </div>

      <div class="songs-page__status" v-if="store.currentUser">
        Logged in as {{ store.currentUser.displayName }}
      </div>
      <div class="songs-page__status" v-else>Not logged in</div>
    </section>

    <section class="songs-page__feedback" v-if="message">
      {{ message }}
    </section>

    <section class="songs-page__list">
      <Music
        v-for="song in store.songs"
        :key="song.id"
        :song="song"
        @play-song="handlePlaySong"
        @add-to-playlist="handleAddToPlaylist"
        @favorite-song="handleFavoriteSong"
      />
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Music from '@/components/Music.vue'
import { store } from '@/store/musicStore'

const message = ref('')

function handlePlaySong(song) {
  store.playSong(song)
  message.value = `Now playing: ${song.title}`
}

function handleFavoriteSong(song) {
  const result = store.favoriteSong(song)
  message.value = result.success ? `${song.title} added to favorites.` : result.message
}

function handleAddToPlaylist(song) {
  if (!store.currentUser) {
    message.value = 'Please log in before adding songs to playlists.'
    return
  }

  const playlists = store.userData[store.currentUser.username].playlists

  if (playlists.length === 0) {
    const shouldCreate = window.confirm('No playlists found. Would you like to create one now?')
    if (!shouldCreate) return

    const playlistName = window.prompt('Enter a name for your new playlist:')
    if (!playlistName) return

    const createResult = store.createPlaylist(playlistName)
    if (!createResult.success) {
      message.value = createResult.message
      return
    }
  }

  const refreshedPlaylists = store.userData[store.currentUser.username].playlists

  const playlistOptions = refreshedPlaylists
    .map((playlist) => `${playlist.id}: ${playlist.name}`)
    .join('\n')

  const chosenId = Number(window.prompt(`Choose playlist ID:\n${playlistOptions}`))
  if (!chosenId) return

  const result = store.addSongToPlaylist(song, chosenId)
  message.value = result.success ? `${song.title} added to playlist.` : result.message
}
</script>

<style scoped>
.songs-page {
  min-height: 100vh;
  padding: 28px;
  background: linear-gradient(180deg, #151515 0%, #1e1e1e 100%);
  color: white;
}

.songs-page__header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 24px;
}

.songs-page__title {
  margin: 0;
  font-size: 36px;
  font-family: Georgia, 'Times New Roman', serif;
}

.songs-page__subtitle {
  margin: 8px 0 0;
  color: #b8b8b8;
}

.songs-page__status {
  background: #262626;
  padding: 10px 14px;
  border-radius: 14px;
  color: #d8d8d8;
}

.songs-page__feedback {
  margin-bottom: 18px;
  background: #222;
  border: 1px solid #333;
  padding: 12px 14px;
  border-radius: 12px;
  color: #e8e8e8;
}

.songs-page__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
