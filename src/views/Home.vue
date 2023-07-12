<template>
  <Navbar />
  <Banner />
  <About />
  <Portfolio />
  <Contact />
  <Footer />
  <Scrolltop />
</template>
<script>
import Navbar from "../components/Navbar.vue"
import Banner from "../components/section/Banner.vue"
import Portfolio from "../components/section/Portfolio.vue"
import About from "../components/section/About.vue"
import Contact from "../components/section/Contact.vue"
import Footer from "../components/section/Footer.vue"
import Scrolltop from "../components/Scrolltop.vue"

export default {
  components: {
    Navbar,
    Banner,
    Portfolio,
    About,
    Contact,
    Footer,
    Scrolltop,
  },
}
</script>
<style></style>
