import { reactive } from "vue"

import alquran from "/public/assets/thumbAlquran.jpg"
import alquran1 from "/public/assets/detailAlquran.png"
import alquran2 from "/public/assets/detailAlquran2.png"
import alquran3 from "/public/assets/detailAlquran3.png"

import vueBlog from "/public/assets/thumbVue.jpg"
import vueBlog1 from "/public/assets/vueblog1.png"
import vueBlog2 from "/public/assets/vueblog2.png"
import vueBlog3 from "/public/assets/vueblog3.png"

import store from "/public/assets/thumbStore.png"
import store1 from "/public/assets/detailBootstore.png"
import store2 from "/public/assets/detailBoostore2.png"
import store3 from "/public/assets/detailBootstore3.png"

export const state = reactive([
  {
    id: 1,
    name: "Al-Qur'an Online",
    tools: "HTML,CSS,Javascript,Vue.js,TailwindCSS",
    about:
      "Ini adalah project pertama saya yang menggunakan Vue Js dengan Vite. Di project ini saya mengambil API dari https://quranapi.idn.sch.id/ dan menggunakan tailwind css untuk styling.",
    thumb: alquran,
    img: [alquran1, alquran2, alquran3],
    type: "Web Application",
    demo: "https://alquran-online-v2.netlify.app/",
  },
  {
    id: 2,
    name: "Vue Blog Firebase",
    tools: "HTML,CSS,Javascript,Vue.js,BootstrapCSS",
    about:
      "Vue Blog Firebase ini adalah project yang saya buat berdasarkan video tutorial yang saya ikuti di Codepolitan. Project ini menggunakan Vue JS dengan Vite dan memanfaatkan firebase sebagai alternatif backend dan juga menggunakan Bootstrap CSS berserta templatenya.",
    thumb: vueBlog,
    img: [vueBlog1, vueBlog2, vueBlog3],
    type: "Web Application",
    demo: "https://simple-clean-blog.netlify.app/",
  },
  {
    id: 3,
    name: "Dr Martens Store",
    tools: "HTML,CSS,Javascript,Vue.js,Tailwind CSS,Daisy UI,Firebase",
    about:
      "Fake Dr Martens Store menggunakan Vue JS dengan vite yang mengambil data dari firebase database dan styling menggunakan Tailwind CSS dan Daisy UI.",
    thumb: store,
    img: [store1, store2, store3],
    type: "Web Application",
    demo: "https://fake-drmartens-store.netlify.app/",
  },
])
