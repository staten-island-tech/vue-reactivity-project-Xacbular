<template>
  <div>
    <Music v-for="song in playlist" :key="song.title" :song="song">{{ song.title }}</Music>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Music } from '@/components/Music.vue'
const playlist = ref([
  {
    title: 'Green Tea Dreams',
    artist: 'Cafe Vibes',
    color: '#D8E2DC',
    next: 'Jasmine Serenity',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: 'Jasmine Serenity',
    artist: 'Lo-Fi Brewer',
    color: '#E0F2F1',
    next: 'Espresso Rain',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    title: 'Espresso Rain',
    artist: 'Sunday Morning',
    color: '#D7CCC8',
    next: 'Green Tea Dreams',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
])
</script>

<style scoped>
div {
  padding: 16px;
}
</style>
