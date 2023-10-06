<script setup>

  import Props from '../components/SpråkComponent.vue';
  import JSON from '../assets/json/språk.json';

</script>

<template>
  <Props v-for="i in JSON" :title="i.title" :description="i.description" :id="i.id" />
</template>

<style scoped>

</style>