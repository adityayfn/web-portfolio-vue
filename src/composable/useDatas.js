import { reactive } from "vue"
import thumbAlquran from "/public/thumb/thumbAlquran.jpg"
import thumbStore from "/public/thumb/thumbStore.jpg"
import thumbVintage from "/public/thumb/thumbVintage.jpg"

import alquran from "/public/detail/alquran.jpg"
import alquran2 from "/public/detail/alquran2.jpg"
import alquran3 from "/public/detail/alquran3.jpg"

import bootstore from "/public/detail/bootstore.jpg"
import bootstore2 from "/public/detail/bootstore2.jpg"
import bootstore3 from "/public/detail/bootstore3.jpg"
import lpvintage from "/public/detail/lp-vintage.jpg"
import lpvintage2 from "/public/detail/lp-vintage2.jpg"
import lpvintage3 from "/public/detail/lp-vintage3.jpg"

import html from "/public/icons/html.png"
import css from "/public/icons/css.png"
import js from "/public/icons/js.png"
import vue from "/public/icons/vue.png"
import tailwind from "/public/icons/tailwind.png"
import daisy from "/public/icons/daisy.png"
import fire from "/public/icons/fire.png"

export const state = reactive([
  {
    id: 1,
    title: "Al-Qur'an Online",
    tech: [html, css, js, vue, tailwind],
    about:
      "This is my first project during learn vue js. In this project I use API from https://quranapi.idn.sch.id/  ",
    thumb: thumbAlquran,
    img: [alquran, alquran2, alquran3],
    demo: "https://alquran-online-v2.netlify.app/",
  },
  {
    id: 2,
    title: "Fake Dr Martens Store",
    tech: [html, css, js, vue, tailwind, daisy, fire],
    about:
      "Fake Dr Martens Store using Vue Js 3 with vite. In this project I use firebase database.",
    thumb: thumbStore,
    img: [bootstore, bootstore2, bootstore3],
    demo: "https://fake-drmartens-store.netlify.app/",
  },
  {
    id: 3,
    title: "LP Tshirt Band Vintage",
    tech: [html, css, js, vue, tailwind, daisy],
    about: "This is a fake project, I got it from https://goodbrief.io/.",
    thumb: thumbVintage,
    img: [lpvintage, lpvintage2, lpvintage3],
    demo: "https://tshirt-band-vintage-lp.netlify.app/",
  },
])
