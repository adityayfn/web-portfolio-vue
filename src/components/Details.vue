<template>
  <section
    class="bg-white text-black pt-10 text-3xl dark:bg-black dark:text-white"
  >
    <div v-for="item in details" class="">
      <div class="title mb-10">
        <h1 class="text-center">{{ item.name }}</h1>
      </div>
      <div class="md:flex md:justify-center md:flex-wrap">
        <div class="img w-[350px] my-2 mx-auto" v-for="img in item.img">
          <img :src="img" alt="" class="my-10 rounded-xl" />
        </div>
      </div>
      <div class="md:flex md:px-4">
        <div class="about p-4">
          <h1 class="md:text-4xl">About</h1>
          <p class="text-base md:text-xl text-gray-600 dark:text-white">
            {{ item.about }}
          </p>
        </div>
        <div class="tools p-4">
          <h1 class="md:text-4xl">Tools & Technologies</h1>
          <p
            class="text-base md:text-xl md:tracking-wide text-gray-600 dark:text-white"
          >
            {{ item.tools }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { state } from "../composable/useDatas"
import { computed } from "vue"
import { useRoute } from "vue-router"
export default {
  setup() {
    const route = useRoute()

    const details = computed(() => {
      return state.filter((data) => data.id == route.params.id)
    })

    return {
      details,
    }
  },
}
</script>
<style></style>
