<template>
  <article class="song-card">
    <img
      class="song-card__cover"
      :src="song.imageurl || '/images/example.jpg'"
      :alt="song.title + ' album cover'"
    />

    <div class="song-card__info">
      <h2 class="song-card__title">{{ song.title }}</h2>
      <h3 class="song-card__artist">{{ song.artist }}</h3>
    </div>

    <div class="song-card__actions">
      <button
        class="song-card__button song-card__button--play"
        :title="'Play ' + song.title"
        @click="$emit('play-song', song)"
      >
        ▶
      </button>
      <button
        class="song-card__button song-card__button--add"
        :title="'Add to Playlist: ' + song.title"
        @click="$emit('add-to-playlist', song)"
      >
        ＋
      </button>
      <button
        class="song-card__button song-card__button--favorite"
        :title="'Favorite: ' + song.title"
        @click="$emit('favorite-song', song)"
      >
        ★
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps({
  song: {
    type: Object,
    required: true,
  },
})

defineEmits(['play-song', 'add-to-playlist', 'favorite-song'])
</script>

<style scoped>
.song-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px 14px;
  box-sizing: border-box;
  border-radius: 12px;
  transition: background-color 0.15s ease;
  cursor: pointer;
  background: #181818;
}

.song-card:hover {
  background-color: #242424;
}

.song-card__cover {
  width: 52px;
  height: 52px;
  object-fit: cover;
  display: block;
  border-radius: 8px;
  margin-right: 14px;
  flex-shrink: 0;
}

.song-card__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.song-card__title,
.song-card__artist {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.song-card__title {
  font-size: 18px;
  font-weight: 600;
  color: white;
}

.song-card__artist {
  font-size: 14px;
  font-weight: 400;
  color: #b3b3b3;
  margin-top: 4px;
}

.song-card__actions {
  display: flex;
  gap: 8px;
}

.song-card__button {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.1s ease;
}

.song-card__button:active {
  transform: scale(0.95);
}

.song-card__button--play {
  background: #1db954;
  color: black;
  font-weight: bold;
}

.song-card__button--play:hover {
  background: #1ed760;
}

.song-card__button--favorite {
  background: #f5e76a;
  color: black;
}

.song-card__button--favorite:hover {
  background: #fff176;
}

.song-card__button--add {
  background: #3a3a3a;
}

.song-card__button--add:hover {
  background: #575757;
}
</style>
