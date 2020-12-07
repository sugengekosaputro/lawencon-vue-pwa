<template>
  <div class="main-page">
    <Jumbotron />
    <div class="title-section clearfix">
      <div class="float-left">
        <h3>Best <strong>Foods</strong></h3>
      </div>
      <div class="float-right">
        <b-button href="#" variant="success" @click="move"> <b-icon icon="eye"></b-icon> Lihat Semua</b-button>
      </div>
    </div>
    <div class="list-content d-flex justify-content-between" style="margin-top:24px">
      <FoodCard v-for="food in getBestFoods" :key="food.id" :food="food" />
    </div>
  </div>
</template>

<script>
import FoodCard from '../components/FoodCard.vue';
import Jumbotron from '../components/Jumbotron.vue'
export default {
  components: { Jumbotron, FoodCard },
  methods: {
    move(){
            this.$router.push({ path: "/foods" });
    }
  },
  computed: {
    getBestFoods(){
      return this.$store.state.bestFoods;
    }
  },
  mounted() {
    //actions
    this.$store.dispatch('getBestFoods');
  }

}
</script>

<style>

</style>