<script setup lang="ts">

import { computed, ref } from 'vue'

const { title, description, id } = defineProps<{
  title: string,
  description: string,
  id: string
}>()

// let buttonSymbol = computed(() => {
//   return showBody.value ? "-" : "+";
// })

const buttonState = ref(false);

function changeState(id: string, btnState: boolean) {
  const btn = (<HTMLButtonElement>document.getElementById(id));
  btn.style.transition = "all 0.5s ease";
  if (!btnState) {
    btn.style.rotate = "135deg";
    buttonState.value = true;
    console.log(btnState);
  } else {
    btn.style.rotate = "0deg";
    buttonState.value = false;
    console.log(btnState);
  }
}

function changeBorderColor() {
  const color = ref(localStorage.getItem("darkMode"))
  if (color.value == "☀️") {
    return "var(--lightText) 0 0 .1rem";
  } else if (color.value == "🌙") {
    return "var(--darkText) 0 0 .1rem";
  }
}

</script>

<template>
  <div class="card" :style="{ boxShadow: changeBorderColor() }">
    <div class="header">
      <h2>{{ title }}</h2>
      <button :id="id" @click="changeState(id, buttonState);">+</button>
    </div>
    <Transition name="slide">
      <div v-if="buttonState" class="body">
        <p>{{ description }}</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.card {
  width: 75%;
  margin: 0 auto;
  border-radius: 0 0 20px 20px;
  box-shadow: #000 0 0 .1rem;
  margin-top: 1.25%;
  margin-bottom: 1.25%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h2 {
  padding-left: 10px;
}

.body p {
  padding-left: 10px;
  padding-bottom: 10px;
}

#kontaktlærer {
  padding-bottom: 10px;
  font-weight: bold;
}

.header button {
  background-color: darkgrey;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: none;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
}

.slide-enter-active {
  transition: all 0.5s ease-out;
}

.slide-leave-active {
  transition: all 0.5s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>