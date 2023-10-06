<script setup>

  import Props from '../components/ProsjekterComponent.vue'
  import JSON from '../assets/json/prosjekter.json'

</script>

<template>

<div class="boxContainer">
  <Props v-for="i in JSON" :title="i.title" :description="i.description" :url="i.url" :lang="i.lang" />
</div>

</template>

<style scoped>
  .boxContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 5%;
    grid-gap: 5%;
    width: 90%;
    margin-top: 2.5%;
  }
</style>