<template>
  <section class="bg-white dark:bg-black">
    <div
      class="flex flex-wrap h-auto my-0 mx-2 pt-6 md:place-items-center md:pt-0 md:flex-nowrap"
    >
      <div class="my-6 mx-auto text-center md:text-left md:px-4 md:w-96">
        <h1 class="text-4xl text-rose-550 font-bold md:tracking-wide">
          Hi,I AM ADITYA
        </h1>
        <p class="text-gray-500 md:text-xl dark:text-white">
          A Junior Front-end Developer
        </p>
        <button
          class="hover:bg-rose-550 rounded p-2 border-gray-600 mt-4 text-gray-500 hover:text-white shadow-xl border md:p-4 md:text-xl dark:text-white"
          @click="downloadCv()"
        >
          <font-awesome-icon :icon="['fas', 'download']" />
          <span class="ml-4">Download CV</span>
        </button>
      </div>
      <div class="min-[414px]:h-64 min-[414px]:my-28 md:mx-20 my-0 mx-auto">
        <img
          src="/public/assets/banner3.svg"
          alt=""
          class="w-[600px] md:w-[500px]"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue"
export default {
  setup() {
    const cvUrl = ref("/public/assets/cv.pdf")

    const downloadCv = () => {
      const link = document.createElement("a")
      link.href = cvUrl.value
      link.download = "cv.pdf"
      link.click()
    }

    return {
      downloadCv,
    }
  },
}
</script>
<style></style>
