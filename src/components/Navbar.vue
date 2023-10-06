<script setup>

</script>

<template>
  <div class="container">
    <RouterLink id="hjem" to="/">Hjem</RouterLink>
    <RouterLink id="utdanning" to="/utdanning">Utdanning</RouterLink>
    <RouterLink id="erfaring" to="/erfaring">Erfaring</RouterLink>
    <RouterLink id="prosjekter" to="/prosjekter">Prosjekter</RouterLink>
  </div>
</template>

<style scoped>
  .container {
    text-align: center;
  }
  #hjem, #utdanning, #erfaring {
    margin-right: 10%;
  }

  .container a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    transition: all 0.25s ease;
  }

  .container {
    padding-bottom: 1%;
    border-bottom: 1px solid black  ;
  }

  .container a:hover {
    font-size: 22px;
  }
</style>