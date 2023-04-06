import { reactive } from "vue"

export const state = reactive([
  {
    id: 1,
    name: "Al-Qur'an Online",
    tools: "HTML,CSS,Javascript,Vue.js,TailwindCSS",
    about:
      "Ini adalah project pertama saya yang menggunakan Vue Js dengan Vite. Di project ini saya mengambil API dari https://quranapi.idn.sch.id/ dan menggunakan tailwind css untuk styling.",
    thumb: "/public/assets/AD.jpg",
    img: [
      "/public/assets/AD.png",
      "/public/assets/AD2.png",
      "/public/assets/AD3.png",
    ],
    type: "Web Application",
  },
  {
    id: 2,
    name: "Vue Blog Firebase",
    tools: "HTML,CSS,Javascript,Vue.js,BootstrapCSS",
    about:
      "Vue Blog Firebase ini adalah project yang saya buat berdasarkan video tutorial yang saya ikuti di Codepolitan. Project ini menggunakan Vue JS dengan Vite dan memanfaatkan firebase sebagai alternatif backend dan juga menggunakan Bootstrap CSS berserta templatenya.",
    thumb: "/public/assets/VB.jpg",
    img: [
      "/public/assets/vueblog.png",
      "/public/assets/vueblog2.png",
      "/public/assets/vueblog3.png",
    ],
    type: "Web Application",
  },
  {
    id: 3,
    name: "Dr Martens Store",
    tools: "HTML,CSS,Javascript,Vue.js,Tailwind CSS,Daisy UI,Firebase",
    about:
      "Fake Dr Martens Store menggunakan Vue JS dengan vite yang mengambil data dari firebase database dan styling menggunakan Tailwind CSS dan Daisy UI.",
    thumb: "/public/assets/bootstorethumb.png",
    img: [
      "/public/assets/bootstore.png",
      "/public/assets/boostore2.png",
      "/public/assets/bootstore3.png",
    ],
    type: "Web Application",
  },
])
