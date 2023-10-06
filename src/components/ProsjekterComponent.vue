<script setup lang="ts">

const { title, description, url, lang } = defineProps<{
  title: string,
  description: string,
  url: string,
  lang: string,
}>()

</script>

<template>
  <div class="card">
    <div class="header">
      <h2>{{ title }}</h2>
    </div>
    <div class="body">
      <p>{{ description }}</p>
      <p><strong>Språk brukt: </strong>{{ lang }}</p>
    </div>
    <div class="link-container">
      <a :href="url" target="_blank">Link</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  text-align: center;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 1.25%;
  margin-bottom: 1.25%;
  margin-right: 5%;
}

.header {
  border-bottom: 1px solid black;
}

.link-container {
  width: 100%;
  background-color: #7f7fff;
  padding: 7px 0px;
  margin-top: auto;
}

.body {
  text-align: center;
  min-height: 150px;
  padding: 0 1rem;
}

.card a {
  color: black;
  text-decoration: none;
}

</style>