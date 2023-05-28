<template>
  <nav
    class="bg-white text-black flex relative flex-wrap pt-6 md:px-8 justify-between md:gap-8 md:flex-nowrap dark:bg-black dark:text-white"
    :class="showMenu ? 'shadow-xl' : 'shadow-none'"
  >
    <div class="flex place-items-center justify-between gap-2">
      <ul class="flex place-items-center">
        <li class="cursor-pointer" @click="home()">
          <img src="/public/assets/a.png" alt="" class="w-16" />
        </li>
        <li class="cursor-pointer" @click="home()">
          <h1 class="name text-2xl"><span class="text-3xl">A</span>ditya</h1>
        </li>
      </ul>
    </div>
    <div class="pt-1 md:order-3">
      <ul class="flex gap-4 ml-8 py-2">
        <!-- <li class="bg-rose-550 text-black pt-2 rounded p-2 cursor-pointer">
          Hire Me
        </li> -->
        <li
          class="p-2 w-12 rounded text-center bg-slate-100 cursor-pointer dark:text-black hover:p-4"
          @click="darkMode()"
        >
          <font-awesome-icon
            :icon="darkOn ? ['fas', 'sun'] : ['fas', 'moon']"
            size="lg"
          />
        </li>
      </ul>
    </div>

    <div class="bars block sm:hidden pt-3 pl-6">
      <button
        @click="toggle()"
        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none left-0"
      >
        <font-awesome-icon
          :icon="showMenu ? ['fas', 'xmark'] : ['fas', 'bars']"
          size="lg"
        />
      </button>
    </div>
    <div
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
      :class="showMenu ? 'block' : 'hidden'"
    >
      <div class="flex text-sm sm:flex-grow relative">
        <ul
          class="p-3 relative gap-5 block md:flex md:place-items-center md:flex-1 md:justify-center"
        >
          <a
            @click="portfolio()"
            class="cursor-pointer block sm:inline-block sm:mt-0 text-xl mr-4 hover:text-rose-550"
          >
            Portfolio
          </a>

          <a
            @click="about()"
            class="cursor-pointer block sm:inline-block sm:mt-0 text-xl mr-4 hover:text-rose-550"
          >
            About
          </a>

          <a
            @click="contact()"
            class="cursor-pointer block sm:inline-block sm:mt-0 text-xl mr-4 hover:text-rose-550"
          >
            Contact
          </a>
          <li
            class="btn bg-rose-550 text-white cursor-pointer text-base border-none hover:bg-rose-700"
            @click="hireMe()"
          >
            Hire Me
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from "vue"

export default {
  setup() {
    const showMenu = ref(false)

    const darkOn = ref(false)

    const home = () => {
      return (window.location.href = "#banner")
    }

    const toggle = () => {
      showMenu.value = !showMenu.value
    }

    const hireMe = () => {
      window.open("mailto:adhitya.firstian@gmail.com")
    }
    const darkMode = () => {
      darkOn.value = !darkOn.value

      if (darkOn.value) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("darkOn", "true")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("darkOn", "false")
      }
    }
    onMounted(() => {
      const darkOnStorage = localStorage.getItem("darkOn")
      if (darkOnStorage == "true") {
        darkOn.value = true
        document.documentElement.classList.add("dark")
      } else {
        darkOn.value = false
        document.documentElement.classList.remove("dark")
      }
    })
    const portfolio = () => {
      return (window.location.href = "#portfolio")
    }
    const about = () => {
      return (window.location.href = "#about")
    }
    const contact = () => {
      return (window.location.href = "#contact")
    }

    return {
      toggle,
      showMenu,
      home,
      hireMe,
      darkMode,
      darkOn,
      portfolio,
      about,
      contact,
    }
  },
}
</script>
<style scoped></style>
