<template>
  <div class="song">
    <img class="album-cover" :src="song.imageurl" alt="Album Cover" />

    <div class="title">
      <h2>{{ song.title }}</h2>
      <h3>{{ song.artist }}</h3>
    </div>

    <div class="actions">
      <button class="play-button" :title="'Play ' + song.title" @click="$emit('play-song', song)">
        ▶
      </button>
      <button :title="'Add to Playlist: ' + song.title" @click="$emit('add-to-playlist', song)">
        ＋
      </button>
      <button :title="'Like: ' + song.title" @click="$emit('like-song', song)">♥</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  song: {
    type: Object,
    required: true,
  },
})
defineEmits(['play-song', 'add-to-playlist', 'like-song'])
</script>

<style scoped>
h2,
h3 {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h2 {
  font-size: 18px;
  font-weight: 600;
  color: white;
}

h3 {
  font-size: 14px;
  font-weight: 400;
  color: #b3b3b3;
  margin-top: 4px;
}

.song {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px 14px;
  box-sizing: border-box;
  border-radius: 6px;
  transition: background-color 0.15s ease;
  cursor: pointer;
}

.song:hover {
  background-color: #2a2a2a;
}

.album-cover {
  margin: 0;
  width: 52px;
  height: 52px;
  object-fit: cover;
  display: block;
  border-radius: 4px;
  margin-right: 14px;
  flex-shrink: 0;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
.actions {
  display: flex;
  gap: 8px;
}

button {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: #1f1f1f;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.1s ease;
}

button:hover {
  background: #3a3a3a;
}

button:active {
  transform: scale(0.95);
}

.play-button {
  background: #1db954;
  color: black;
  font-weight: bold;
}

.play-button:hover {
  background: #1ed760;
}
</style>
