<template>
  <div class="jumbotron-comp">
    <b-jumbotron header="Delicious Food Menu" lead="In Your Handphone">
    <p>Ayo segera pilih dan pesan makanan favorit anda</p>
    <b-button variant="success" @click="move"><b-icon icon="arrow-right"></b-icon> Pesan</b-button>
  </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  methods: {
    move(){
            this.$router.push({ path: "/foods" });
    }
  }
}
</script>

<style>

</style>