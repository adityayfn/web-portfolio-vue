<template>
  <div class="relative">
    <button
      v-if="showScrollButton"
      @click="scrollToTop"
      class="fixed right-4 bottom-4 btn rounded-full max-sm-hidden"
    >
      <font-awesome-icon
        :icon="['fas', 'arrow-up']"
        class="text-2xl hover:text-3xl"
      />
    </button>
    <button
      v-if="showScrollButton"
      @click="scrollToTop"
      class="fixed right-44 bottom-16 text-green rounded-full p-4 z-30 hover:bg-green hover:text-dark md:hidden"
    >
      <font-awesome-icon
        :icon="['fas', 'arrow-up']"
        class="text-2xl hover:text-3xl"
      />
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue"

export default {
  setup() {
    const showScrollButton = ref(false)

    const handleScroll = () => {
      showScrollButton.value = window.pageYOffset > 100
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      })
    }

    onMounted(() => {
      window.addEventListener("scroll", handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })

    return {
      showScrollButton,
      scrollToTop,
    }
  },
}
</script>

<style></style>
