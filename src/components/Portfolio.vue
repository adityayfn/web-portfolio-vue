<template>
  <section class="h-auto bg-white py-8 dark:bg-black">
    <div>
      <h1
        class="text-center text-4xl text-rose-550 font-semibold md:text-5xl md:tracking-wide"
      >
        Projects Portfolio
      </h1>
    </div>
    <div class="md:flex md:flex-wrap md:mt-16 md:justify-center">
      <div class="card mt-10 shadow-xl mx-4 md:w-[340px]" v-for="item in state">
        <figure>
          <img :src="item.thumb" class="md:h-[220px]" alt="" />
        </figure>
        <div class="card-body flex place-items-center">
          <h2 class="card-title text-gray-700 dark:text-white">
            {{ item.name }}
          </h2>
          <p class="text-gray-600 dark:text-white">{{ item.type }}</p>

          <div class="justify-end card-actions">
            <button
              class="btn bg-rose-550 border-none text-white"
              @click="details(item.id)"
            >
              More info
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { state } from "../composable/useDatas"
import { useRouter } from "vue-router"
export default {
  setup() {
    const router = useRouter()

    const details = (id) => {
      router.push("/details/" + id)
    }

    return {
      state,
      details,
    }
  },
}
</script>
<style></style>
