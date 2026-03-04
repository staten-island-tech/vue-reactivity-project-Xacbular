<template>
  <div>
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
  height: 50px;
  border: 3px solid black;
}
</style>
