<template>
  <li
    class="p-2 w-12 rounded text-center bg-green cursor-pointer btn m-0"
    @click="darkMode()"
  >
    <font-awesome-icon
      :icon="darkOn ? ['fas', 'sun'] : ['fas', 'moon']"
      size="lg"
    />
  </li>
</template>

<script>
import { onMounted, ref } from "vue"
export default {
  setup() {
    const darkOn = ref(false)
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

    return {
      darkMode,
      darkOn,
    }
  },
}
</script>

<style lang="scss" scoped></style>
