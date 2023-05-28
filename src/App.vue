<template>
  <div>
    <Scrolltop />
    <router-view></router-view>
  </div>
</template>
<script>
import Scrolltop from "./components/Scrolltop.vue"
export default {
  components: {
    Scrolltop,
  },
}
</script>

<style></style>
