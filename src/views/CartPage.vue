<template>
  <div class="cart-page">
    <Cart :carts="carts" />
  </div>
</template>

<script>
import Cart from "../components/Cart.vue";

export default {
  name: "CartPage",
  components: { Cart },
  computed: {
    carts(){
      return this.$store.state.cart;
    }
  }
};
</script>

<style>
</style>