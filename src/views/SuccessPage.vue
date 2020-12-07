<template>
  <div class="success-page" style="text-align:center">
    <b-img :src="getImage()" fluid alt="Image" class="rounded-0" style="max-width: 400px;"></b-img>
    <h3>Sukses!!!</h3>
    <small>Pesanan Anda Sedang Diproses</small>
  </div>
</template>

<script>
export default {
  name: "SuccessPage",
  methods: {
    getImage() {
      return require("../assets/menunggu.png");
    },
  },
};
</script>

<style>
</style>