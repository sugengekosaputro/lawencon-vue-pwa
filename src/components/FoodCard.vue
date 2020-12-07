<template>
  <div class="food-card">
    <b-card
      :title="food.nama"
      :img-src="getImage(food.gambar)"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 22rem"
      class="mb-2"
    >
      <b-card-text>Harga Rp.{{ food.harga }} </b-card-text>

      <b-button variant="success" @click="order(food.id)">
        <b-icon icon="cart2"></b-icon> Pesan</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "FoodCard",
  props: ["food"],
  methods: {
    getImage(name) {
      return require('../assets/'+name);
    },
    order(id) {
      this.$router.push({ path: '/food/'+id })
    }
  }
};
</script>

<style>
</style>