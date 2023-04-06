import { createApp } from "vue"
import "./index.css"
import App from "./App.vue"
import router from "./router"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import {
  faMoon,
  faSun,
  faBars,
  faXmark,
  faDownload,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faMoon,
  faSun,
  faBars,
  faXmark,
  faDownload,
  fab,
  faLocationDot,
  faEnvelope,
  faPhone
)

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app")
