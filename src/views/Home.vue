<template>
  <Navbar />
  <Banner />
  <Portfolio />
  <About />
  <Contact />
  <Footer />
</template>
<script>
import Navbar from "../components/Navbar.vue"
import Banner from "../components/Banner.vue"
import Portfolio from "../components/Portfolio.vue"
import About from "../components/About.vue"
import Contact from "../components/Contact.vue"
import Footer from "../components/Footer.vue"

export default {
  components: {
    Navbar,
    Banner,
    Portfolio,
    About,
    Contact,
    Footer,
  },
}
</script>
<style></style>
