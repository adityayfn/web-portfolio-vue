<template>
  <Scrolltop />
  <router-view></router-view>
</template>
<script>
import Scrolltop from "./components/Scrolltop.vue"
import { onMounted } from "vue"
export default {
  components: {
    Scrolltop,
  },
  setup() {
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
    return {}
  },
}
</script>

<style></style>
