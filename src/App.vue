<template>
  <router-view></router-view>
</template>
<script setup>
import { onMounted } from "vue"
onMounted(() => {
  const darkOnStorage = localStorage.getItem("darkOn")
  if (darkOnStorage == "true") {
    // darkOn.value = true
    document.documentElement.classList.add("dark")
  } else {
    // darkOn.value = false
    document.documentElement.classList.remove("dark")
  }
})
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Eczar&display=swap");

.abril {
  font-family: "Abril Fatface", cursive;
}
.eczar {
  font-family: "Eczar", serif;
}
</style>
