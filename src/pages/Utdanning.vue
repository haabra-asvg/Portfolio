<script setup>

  import JSON from '../assets/json/utdanning.json';
  import Props from '../components/UtdanningComponent.vue';

</script>

<template>
  <Props v-for="i of JSON" :title="i.title" :description="i.description" :kontaktlærer="i.kontaktlærer" :id="i.id" />
</template>

<style scoped>

</style>