<template>
  <section
    class="flex flex-col gap-10 dark:bg-dark pt-10 min-[1024px]:flex-row min-[1024px]:justify-center min-[1024px]:items-center min-[1024px]:pt-0 h-auto pb-20"
    id="home"
  >
    <div
      class="text-center min-[1024px]:flex-row mt-8 animate__animated animate__backInLeft"
    >
      <h1 class="text-4xl font-bold text-green abril">HI,I AM ADITYA</h1>
      <p class="dark:text-gray-200 md:text-xl eczar mb-2">
        Junior Front-end Developer
      </p>

      <a href="cv.pdf" class="btn hover:text-green">Download CV</a>
    </div>

    <div class="mt-10 px-6 animate__animated animate__backInRight">
      <img
        src="/public/programming.svg"
        alt=""
        class="md:my-0 md:mx-auto md:w-[500px] min-[1024px]:w-[400px]"
      />
    </div>
  </section>
</template>
<script>
import { ref } from "vue"
import CV from "/public/cv.pdf"
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
