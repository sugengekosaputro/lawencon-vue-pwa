<template>
  <div class="food-page">
    <div class="title-section" style="margin-top: 24px">
      <h3>Daftar <strong>Makanan</strong></h3>
    </div>
    <div
      class="list-content d-flex flex-wrap justify-content-between"
      style="margin-top: 24px"
    >
      <FoodCard v-for="food in getFoods" :key="food.id" :food="food" />
    </div>
  </div>
</template>

<script>
import FoodCard from "../components/FoodCard.vue";

export default {
  components: { FoodCard },
  data(){
    return{
      tempData: this.getFoods,
    }
  },
  name: "FoodPage",
  computed:{
    getFoods(){
      return this.$store.state.foods;
    },
    filterKeyword(){
      if(this.keyword) {
        return this.tempData.filter(item => {
          return this.keyword.toLowerCase().split('').every(name => item.nama.toLowerCase().includes(name));
        })
      } else {
        return this.tempData;
      }
    }
  },
  mounted() {
    //actions
    this.$store.dispatch("getFoods");
  },
};
</script>

<style>
</style>