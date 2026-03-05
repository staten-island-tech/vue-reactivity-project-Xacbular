<template>
  <div>
    <img class="album-cover" :src="song.imageurl" alt="Album Cover" />
    <h2>{{ song.title }}</h2>
    <h3>{{ song.artist }}</h3>
  </div>
</template>

<script setup>
defineProps({
  song: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
h2,
h3 {
  margin: 0;
}
div {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: 3px solid black;
}
img {
  margin: 0;
  max-width: 100px;
  max-height: 100px;
  width: auto;
  height: auto;
  display: block;
}
</style>
