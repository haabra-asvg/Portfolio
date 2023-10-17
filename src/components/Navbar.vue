<script setup lang="ts">

import { ref } from 'vue';
if(!localStorage.getItem("darkMode")) {
  localStorage.setItem("darkMode", "☀️");
}
var showBody = ref(localStorage.getItem("darkMode"));

function changeValue(): void {
  if (showBody.value == "☀️") {
    showBody.value = "🌙";
    document.body.style.backgroundColor = "var(--darkColor)";
    document.body.style.color = "var(--darkText)";
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      (card as HTMLElement).style.boxShadow = "var(--darkText) 0 0 .1rem";
    });
  } else {
    showBody.value = "☀️";
    document.body.style.backgroundColor = "var(--lightColor)";
    document.body.style.color = "var(--lightText)";
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      (card as HTMLElement).style.boxShadow = "var(--lightText) 0 0 .1rem";
    });
  }
  localStorage.setItem("darkMode", showBody.value)
}

document.body.onload = function() {
  const getColor = ref(localStorage.getItem("darkMode"));
  if(getColor.value == "☀️") {
    document.body.style.backgroundColor = "var(--lightColor)";
    document.body.style.color = "var(--lightText)";
  } else if (getColor.value == "🌙") {
    document.body.style.backgroundColor = "var(--darkColor)";
    document.body.style.color = "var(--darkText)";
  }
}

function getBorderColor() {
  if (showBody.value == "☀️") {
    return "1px solid var(--lightText)";
  } else {
    return "1px solid var(--darkText)";
  }
}

function getColor() {
  if (showBody.value == "☀️") {
    return "var(--lightText)";
  } else {
    return "var(--darkText)";
  }
}

</script>

<template>
  <div :style="{ borderBottom: getBorderColor() }" class="container">
    <a :style="{color: getColor()}" id="hjem" href="/">Hjem</a>
    <a :style="{color: getColor()}" id="utdanning" href="/utdanning">Utdanning</a>
    <a :style="{color: getColor()}" id="erfaring" href="/erfaring">Erfaring</a>
    <a :style="{color: getColor()}" id="prosjekter" href="/prosjekter">Prosjekter</a>
    <button id="darkMode" @click="changeValue()">{{ showBody }}</button>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}

#hjem,
#utdanning,
#erfaring,
#prosjekter {
  margin-right: 10%;
}

.container a {
  text-decoration: none;
  font-size: 18px;
  transition: all 0.25s ease;
}

.container {
  padding-bottom: 1%;
}

.container a:hover {
  font-size: 22px;
}
</style>