<template>
  <section
    class="bg-white text-black pt-10 text-3xl dark:bg-black dark:text-white relative pb-10"
  >
    <div class="absolute top-5 right-5">
      <button
        class="btn bg-rose-550 text-white text-md hover:bg-rose-700 border-none"
        @click="goHome()"
      >
        <font-awesome-icon
          :icon="['fa', 'arrow-left']"
          class="text-xl pr-3"
        ></font-awesome-icon>
        Go Back
      </button>
    </div>
    <div
      v-for="item in details"
      class="pt-10 animate__animated animate__fadeIn pb-10"
    >
      <div class="title mb-10">
        <h1 class="text-center text-rose-550 font-bold">{{ item.name }}</h1>
      </div>
      <div class="md:flex md:justify-center md:flex-wrap">
        <div class="img w-[350px] my-2 mx-auto" v-for="img in item.img">
          <img :src="img" alt="" class="my-10 rounded-xl" />
        </div>
      </div>
      <div class="md:flex md:px-4 flex justify-between flex-wrap">
        <div class="about p-4 w-96">
          <h1 class="md:text-4xl text-rose-550">About</h1>
          <p class="text-base md:text-xl text-gray-600 dark:text-white">
            {{ item.about }}
          </p>
        </div>
        <div class="tools p-4">
          <h1 class="md:text-4xl text-rose-550">Tools & Technologies</h1>
          <p
            class="text-base md:text-xl md:tracking-wide text-gray-600 dark:text-white"
          >
            {{ item.tools }}
          </p>
        </div>
        <div class="tools p-4">
          <h1 class="md:text-4xl text-rose-550">Demo</h1>
          <a
            :href="getUrl"
            class="text-base md:text-xl md:tracking-wide text-gray-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
          >
            {{ getUrl }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { state } from "../composable/useDatas"
import { computed, ref } from "vue"
import { useRoute, useRouter } from "vue-router"

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const link = ref()

    const details = computed(() => {
      return state.filter((data) => data.id == route.params.id)
    })

    const getUrl = computed(() => {
      for (let url of details.value) {
        return url.demo
      }
    })

    const goHome = () => {
      router.push("/")
    }

    return {
      details,
      goHome,
      link,
      getUrl,
    }
  },
}
</script>
<style></style>
