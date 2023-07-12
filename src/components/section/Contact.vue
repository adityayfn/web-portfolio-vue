<template>
  <section
    class="text-black py-12 px-10 md:flex md:justify-center md:gap-4 md:p-20 dark:bg-dark dark:text-white"
    id="contact"
  >
    <div
      class="mb-16 md:order-2"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div class="mb-6">
        <h1
          class="text-4xl text-green font-bold text-center abril tracking-wider"
        >
          Contact Details
        </h1>
      </div>
      <div
        class="flex flex-col gap-4 text-dark text-xl dark:text-white eczar tracking-wide"
      >
        <div class="flex gap-2">
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          <h1>Jl.Terusan Batu Bara Vb no 38, Blimbing, Malang, Jawa Timur</h1>
        </div>
        <div class="flex gap-2">
          <font-awesome-icon :icon="['fas', 'envelope']" />
          <h1>adhitya.firstian@gmail.com</h1>
        </div>
        <div class="flex gap-2">
          <font-awesome-icon :icon="['fas', 'phone']" />
          <h1>+62 89675601599</h1>
        </div>
      </div>
    </div>

    <div
      class="shadow-md py-6 px-4 md:py-0 md:w-[550px]"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div>
        <h1
          class="text-4xl text-green font-bold text-center abril tracking-wider"
        >
          Contact Form
        </h1>
      </div>
      <form @submit.prevent="submitForm">
        <div class="card">
          <div class="form-control">
            <label class="label">
              <span class="label-text text-black text-xl dark:text-white"
                >Full Name</span
              >
            </label>
            <input
              type="text"
              placeholder="full name"
              class="input input-ghost dark:bg-white dark:text-black"
              v-model="fullName"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text text-black text-xl dark:text-white"
                >Email</span
              >
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-ghost dark:bg-white dark:text-black"
              v-model="email"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text text-black text-xl dark:text-white"
                >Subject</span
              >
            </label>
            <input
              type="text"
              placeholder="subject"
              class="input input-ghost dark:bg-white dark:text-black"
              v-model="subject"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text text-black text-xl dark:text-white"
                >Message</span
              >
            </label>
            <textarea
              class="textarea h-32 bg-gray-100 dark:bg-white dark:text-black dark:border-2 border-white"
              placeholder="message"
              v-model="message"
            ></textarea>
          </div>
        </div>
        <div class="pt-8 md:py-8">
          <div
            class="alert my-6"
            :class="alert ? 'alert-success' : 'alert-error'"
            v-if="notif !== null"
          >
            <div class="flex-1">
              <label>{{ notif }}</label>
            </div>
          </div>
          <button class="btn" type="submit">Submit Form</button>
        </div>
      </form>
    </div>
  </section>
</template>
<script setup>
import emailjs from "emailjs-com"
import { ref, reactive } from "vue"
const fullName = ref()
const email = ref()
const subject = ref()
const message = ref()

const EMAILJS_SERVICE_ID = "service_xoaj7ht"
const EMAILJS_TEMPLATE_ID = "template_c28vtrl"
const EMAILJS_USER_ID = "DJY8uWJ6siUPkHEsM"

const notif = ref(null)
const alert = ref(false)

emailjs.init(EMAILJS_USER_ID)
const submitForm = () => {
  const template = reactive({
    to_name: "Aditya Yudha",
    from_name: fullName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  })

  console.log(template)

  if (
    template.from_name &&
    template.email &&
    template.subject &&
    template.message
  ) {
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, template)
      .then((res) => {
        console.log("success", res)
      })
      .catch((error) => {
        console.log("error", error)
      })

    alert.value = true
    notif.value = "The contact form has been sent successfully"
    setTimeout(() => {
      notif.value = null
    }, 1500)
  } else {
    alert.value = true
    notif.value = "The contact form has failed to send"
    setTimeout(() => {
      notif.value = null
    }, 1500)
  }

  fullName.value = ""
  email.value = ""
  subject.value = ""
  message.value = ""
}
</script>
<style></style>
