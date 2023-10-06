<script setup>

  import Props from '../components/JobbComponent.vue';
  import JSON from '../assets/json/jobb.json';

</script>

<template>

  <Props v-for="i in JSON" :title="i.title" :kategori="i.kategori" :stilling="i.stilling" :oppgaver="i.oppgaver" :ansatt="i.ansatt" :oppsigelse="i.oppsigelse" :id="i.id" />

</template>

<style scoped>

</style>