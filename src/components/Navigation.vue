<template>
  <div class="nav-comp clearfix">
    <div class="d-flex float-left align-items-baseline">
      <h2>Resto Linov</h2>
      <b-nav>
        <b-nav-item><router-link to="/"> Home </router-link></b-nav-item>
        <b-nav-item><router-link to="/foods"> Foods </router-link></b-nav-item>
      </b-nav>
    </div>
    <div
      class="d-flex float-right align-items-baseline align-bottom"
      style="cursor: pointer"
      @click="movePage()"
    >
      <p class="h4 mb-2 align-bottom">
        Keranjang <b-icon icon="cart2"></b-icon>
      </p>
      <b-badge pill variant="success" class="align-top">{{cart.length}}</b-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    movePage() {
      return this.$router.push({ path: "/cart" });
    },
  },
  computed: {
    cart(){
     return this.$store.state.cart;
    }
  }
};
</script>

<style>
a:hover {
  text-decoration: none;
}
</style>