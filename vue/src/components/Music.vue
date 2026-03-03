<template>
  <div>
    <h2>{{ song.name }}</h2>
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
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: 200px;
  border: 3px solid black;
}
</style>
