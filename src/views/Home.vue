<template>
  <div class="home">
    <Navigation />
    <div class="main-content">
      <router-view />
    </div>
    <footer>
      <div
        class="alert alert-secondary text-center mt-10"
        style="margin-top: 24px"
        role="alert"
      >
        Created By : Sugeng Eko Saputro
      </div>
    </footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "Home",
  components: { Navigation },
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    this.$store.dispatch("getCarts");
  },
};
</script>

<style>
</style>