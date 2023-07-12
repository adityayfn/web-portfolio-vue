<template>
  <section class="h-auto dark:bg-dark pt-14 pb-10" id="portfolio">
    <div
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h1
        class="text-center text-4xl text-rose-550 font-semibold md:text-5xl md:tracking-wide animate__animated animate__fadeInDown text-green abril tracking-wider"
      >
        Projects Portfolio
      </h1>
    </div>
    <div class="md:flex md:flex-wrap md:mt-16 md:justify-center">
      <div
        class="card mt-10 shadow-xl mx-4 md:w-[340px]"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        v-for="item in state"
      >
        <figure>
          <img :src="item.thumb" class="md:h-[220px]" alt="" />
        </figure>
        <div class="card-body flex place-items-center">
          <h2
            class="card-title text-dark dark:text-green text-center text-xl eczar tracking-wider"
          >
            {{ item.title }}
          </h2>

          <div class="">
            <button class="btn" @click="details(item.id)">More info</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { state } from "../../composable/useDatas"
import { useRouter } from "vue-router"
const router = useRouter()

const details = (id) => {
  router.push("/details/" + id)
}
</script>
<style></style>
