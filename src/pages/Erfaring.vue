<script setup>

</script>

<template>
  <div class="container">
    <div class="språk">
      <h2>Språk</h2>
      <RouterLink to="/erfaring/lang"><button id="språkKnapp">Språk</button></RouterLink>
    </div>
    <div class="jobb">
      <h2>Jobb</h2>
      <RouterLink to="/erfaring/jobb"><button id="jobbKnapp">Jobb</button></RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .container {
    padding-top: 2.5%;
    display: flex;
    width: 75%;
    margin: 0 auto;
    text-align: center;
  }

  .container div {
    width: 50%;
  }

  .språk {
    margin-right: 10%;
    border: 1px solid;
    border-radius: 4px;
  }

  .jobb {
    border-radius: 4px;
    border: 1px solid;
  }

  .container div button {
    transition: all 0.25s ease;
    border: none;
    padding: 7px 21px;
    margin-bottom: 2.5%;
    cursor: pointer;
  }

  .container div button:hover {
    font-size: 18px;
  }

</style>