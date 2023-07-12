<template>
  <nav
    class="flex relative flex-wrap md:px-8 justify-between md:gap-4 md:flex-nowrap dark:bg-dark items-center"
    :class="showMenu ? 'shadow-xl' : 'shadow-none'"
  >
    <div class="h-20 items-center flex justify-between px-3">
      <button
        class="text-3xl text-green font-bold abril tracking-wider"
        @click="home"
      >
        <span class="text-4xl">A</span>ditya ;
      </button>
    </div>
    <div class="absolute right-4 md:hidden">
      <Dropdown />
    </div>
    <div class="md:order-3">
      <ul class="relative max-sm:hidden">
        <DarkMode />
      </ul>
    </div>

    <div class="max-sm:hidden">
      <div
        class="text-dark w-full py-2 px-3 md:inline-block dark:text-slate-200"
      >
        <ul
          class="flex flex-col gap-4 md:flex-row md:justify-center items-center"
        >
          <button @click="about" class="text-xl hover:text-green eczar">
            About
          </button>
          <button @click="portfolio" class="text-xl hover:text-green eczar">
            Portfolio
          </button>

          <button @click="contact" class="text-xl hover:text-green eczar">
            Contact
          </button>
          <div>
            <button class="btn m-0" @click="hireMe">Hire Me</button>
          </div>
        </ul>
      </div>
    </div>
  </nav>

  <!--  -->
  <!--  -->
  <!--  -->

  <nav class="w-full md:hidden overflow-x-hidden fixed z-20">
    <div class="fixed md:relative w-full bottom-0 left-0 bg-white rounded-xl">
      <div
        class="dark:bg-dark text-dark dark:text-gray-200 w-full py-2 px-3 md:inline-block border-t-2 border-[#12b488] rounded-xl"
      >
        <ul
          class="flex items-center gap-2 md:flex-row justify-center eczar my-2"
        >
          <DarkMode />
          <button @click="about" class="text-xl hover:text-green">About</button>
          <button @click="portfolio" class="text-xl hover:text-green">
            Portfolio
          </button>

          <button @click="contact" class="text-xl hover:text-green">
            Contact
          </button>

          <button class="btn mt-0" @click="hireMe">Hire Me</button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"
import DarkMode from "./DarkMode.vue"
import Dropdown from "./Dropdown.vue"
const showMenu = ref(false)

const home = () => {
  return (window.location.href = "#home")
}

const hireMe = () => {
  window.open("mailto:adhitya.firstian@gmail.com")
}

const portfolio = () => {
  return (window.location.href = "#portfolio")
}
const about = () => {
  return (window.location.href = "#about")
}
const contact = () => {
  return (window.location.href = "#contact")
}
</script>
<style scoped></style>
