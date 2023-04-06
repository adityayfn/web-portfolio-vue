import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Details from "../components/Details.vue"
import About from "../components/About.vue"
import Portfolio from "../components/Portfolio.vue"
import Contact from "../components/Contact.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: Details,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
