<script setup>

  import Props from '../components/JobbComponent.vue';
  import Ansatt from '../assets/json/ansatt.json';
  import Deltidsjobb from '../assets/json/deltidsjobb.json';

</script>

<template>
  <h2>Deltidsjobb</h2>
  <Props v-for="i in Ansatt" :title="i.title" :kategori="i.kategori" :stilling="i.stilling" :oppgaver="i.oppgaver" :ansatt="i.ansatt" :oppsigelse="i.oppsigelse" :id="i.id" />
  <h2>Praksisplass</h2>
  <Props v-for="i in Deltidsjobb" :title="i.title" :kategori="i.kategori" :stilling="i.stilling" :oppgaver="i.oppgaver" :ansatt="i.ansatt" :oppsigelse="i.oppsigelse" :id="i.id" />
</template>

<style scoped>

  h2 {
    text-align: center;
  }

</style>