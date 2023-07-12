<template>
  <section
    class="flex flex-col gap-10 dark:bg-dark px-5 h-auto pb-20 overflow-x-hidden"
    id="about"
  >
    <div
      class="mt-6 pt-10 md:pt-20"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h1 class="text-green font-bold text-4xl text-center md:text-4xl abril">
        About Me
      </h1>
    </div>
    <div
      class="flex flex-col gap-10 dark:bg-[#202020] rounded-xl px-5 pb-5 pt-10"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div
        class="flex flex-wrap gap-5 justify-center"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div
          class="animate__animated animate__backInLeft"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            src="/public/about.svg"
            alt=""
            class="md:w-[600px] xl:w-[500px]"
          />
        </div>
        <div
          class="min-[1024px]:w-[600px] animate__animated animate__backInRight"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 class="text-xl dark:text-gray-200 md:text-2xl eczar">
            I am a motivated and ambitious individual with a background in
            vocational education (SMK). With my virtual internship experience
            and foundational skills in frontend programming, I am passionate
            about pursuing a career in the technology industry. During my
            virtual internship, I focused on developing my skills in frontend
            programming.
          </h1>
        </div>
      </div>
    </div>
    <div class="xl:flex">
      <Skills />
      <Tools />
    </div>
  </section>
</template>
<script setup>
import Skills from "../Skills.vue"
import Tools from "../Tools.vue"
</script>
<style></style>
