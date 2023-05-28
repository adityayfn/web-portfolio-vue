<template>
  <section class="bg-white dark:bg-black py-10 md:py-0" id="banner">
    <div
      class="flex flex-wrap h-auto my-0 mx-2 md:place-items-center md:pt-0 md:flex-nowrap gap-10 lg:ml-20 md:ml-10"
    >
      <div class="my-6 mx-auto text-center md:text-left md:mx-8 md:w-96">
        <h1
          class="text-4xl text-rose-550 font-bold md:tracking-wide animate__animated animate__fadeInLeft"
        >
          Hi,I AM ADITYA
        </h1>
        <p
          class="text-gray-500 md:text-xl dark:text-white animate__animated animate__fadeInRight"
        >
          A Junior Front-end Developer
        </p>
        <button
          class="hover:bg-rose-550 rounded p-2 border-gray-600 mt-4 text-gray-500 hover:text-white shadow-xl border md:p-4 md:text-xl dark:text-white animate__animated animate__fadeInUp"
          @click="downloadCv()"
        >
          <font-awesome-icon :icon="['fas', 'download']" />
          <span class="ml-4">Download CV</span>
        </button>
      </div>
      <div
        class="min-[414px]:h-64 min-[414px]:my-28 md:mx-20 my-0 mx-auto pt-16"
      >
        <img
          src="/public/assets/banner3.svg"
          alt=""
          class="w-[600px] md:w-[500px] animate__animated animate__fadeIn"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue"
import CV from "/public/assets/cv.pdf"
export default {
  setup() {
    const cvUrl = ref(CV)

    const downloadCv = () => {
      const link = document.createElement("a")
      link.href = cvUrl.value
      link.download = "cv.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    return {
      downloadCv,
    }
  },
}
</script>
<style></style>
