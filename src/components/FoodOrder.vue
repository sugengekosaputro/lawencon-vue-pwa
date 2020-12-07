<template>
  <div class="food-order">
    <b-toast
      id="notif-toast"
      title="BootstrapVue"
      static
      no-auto-hide
      @emit-toast="showToast"
    >
      {{ msg }}
    </b-toast>
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="getImage(food.gambar)"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text>
              <h2>{{ food.nama }}</h2>
              <hr />
              <h5>
                Harga <strong>Rp {{ food.harga }}</strong>
              </h5>
            </b-card-text>
            <b-form-group
              id="field-count"
              label="Jumlah Pesan"
              label-for="field-count"
            >
              <b-input-group>
                <b-input-group-prepend>
                  <b-btn
                    variant="outline-info"
                    @click="num--"
                    :disabled="num <= 0"
                    >-</b-btn
                  >
                </b-input-group-prepend>

                <b-form-input
                  type="number"
                  min="1.00"
                  v-model="num"
                ></b-form-input>

                <b-input-group-append>
                  <b-btn variant="outline-secondary" @click="num++">+</b-btn>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
            <b-form-group
              id="field-note"
              label="Keterangan"
              label-for="field-note"
            >
              <b-form-textarea
                id="textarea"
                placeholder="*Cabenya yang banyak..."
                v-model="note"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>

            <b-button variant="success" @click="addToCart(food)">
              <b-icon icon="cart2"></b-icon> Pesan
            </b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "FoodOrder",
  data() {
    return {
      num: 1,
      note: null,
    };
  },
  methods: {
    showToast() {
      this.msg = "Sukses Masuk Keranjang";
      this.$bvToast.show("notif-toast");
    },
    getImage(name) {
      return require("../assets/" + name);
    },
    addToCart(food) {
      let id = 1;

      if (this.carts.length > 0) {
        id = this.carts[this.carts.length - 1].id + 1;
      }

      let data = {
        jumlah_pesanan: this.num,
        note: this.note,
        products: food,
        id: id,
      };
      this.$store.dispatch("addToCart", {
        data,
      });
      this.$router.push({ path: "/cart" });
      this.$emit("emit-toast", 0);
    },
  },
  computed: {
    carts: {
      get: function () {
        return this.$store.state.cart;
      },
    },
    food() {
      let store = this.$store.state.food;
      if (store == null) {
        return;
      }
      return store;
    },
  },
  mounted() {
    //actions
    this.$store.dispatch("getFood", this.$route.params.id);
    this.$store.dispatch("getCarts");
  },
};
</script>

<style>
</style>