<template>
  <section
    class="bg-white text-black pt-10 text-3xl dark:bg-black dark:text-white relative pb-10"
  >
    <div class="flex justify-end mx-5">
      <button class="btn" @click="goHome()">
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
        <h1
          class="text-center text-green font-bold text-4xl eczar tracking-wide"
        >
          {{ item.title }}
        </h1>
      </div>
      <div class="md:flex md:justify-center md:flex-wrap">
        <div class="img w-[350px] my-2 mx-auto" v-for="img in item.img">
          <img :src="img" alt="" class="my-10 rounded-xl" />
        </div>
      </div>
      <div class="px-3 mt-5 flex flex-col gap-7">
        <div>
          <h1 class="text-green text-3xl font-bold md:text-3xl abril">About</h1>
          <h2 class="dark:text-gray-200 text-dark text-xl eczar">
            {{ item.about }}
          </h2>
        </div>
        <div>
          <h1 class="text-green text-3xl font-bold md:text-3xl abril">
            Tech Stack
          </h1>
          <div class="flex gap-5">
            <div v-for="icon in item.tech" class="bg-white p-1 rounded-xl">
              <img :src="icon" alt="" class="w-10" />
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-green text-2xl font-bold md:text-3xl abril">Demo</h1>
          <a
            :href="item.demo"
            class="dark:text-gray-200 text-dark hover:text-green text-xl eczar"
            >{{ item.demo }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { state } from "../composable/useDatas"
import { computed, ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

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
</script>
<style></style>
