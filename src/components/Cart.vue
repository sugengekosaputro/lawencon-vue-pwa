<template>
  <div class="cart clearfix">
    <h2 class="mb-4">Keranjang Saya</h2>
    <b-table striped hover :items="carts" :fields="fields">
      <template #cell(no)="data">
        {{ data.index + 1 }}
      </template>

      <template #cell(image)="data">
        <b-card-img
          :src="getImage(data.item.data.products.gambar)"
          alt="Image"
          class="rounded-0"
        ></b-card-img>
      </template>

      <template #cell(foodName)="data">
        {{ data.item.data.products.nama }}
      </template>

      <template #cell(note)="data">
        {{ data.item.data.note == null ? `-` : data.item.data.note }}
      </template>

      <template #cell(pcs)="data">
        {{ data.item.data.jumlah_pesanan }}
      </template>

      <template #cell(price)="data">
        Rp.{{ data.item.data.products.harga }}
      </template>

      <template #cell(priceTotal)="data">
        Rp.{{ data.item.data.jumlah_pesanan * data.item.data.products.harga }}
      </template>

      <template #cell(delete)="data">
        <b-button
          variant="light"
          class="btn btn-link"
          @click="remove(data.item.data.id, data.index)"
        >
          <b-icon icon="trash" font-scale="2" class="text-danger"></b-icon
        ></b-button>
      </template>
    </b-table>
    <div class="float-right w-50">
      <h4>Total Harga : Rp. {{ total }}</h4>
      <b-row no-gutters>
        <b-col>
          <b-form-group id="group-name" label="Nama" label-for="group-name">
            <b-form-input id="field-name" v-model="name" trim></b-form-input>
          </b-form-group>
          <b-form-group
            id="group-table"
            label="Nomor Meja"
            label-for="group-table"
          >
            <b-form-input
              id="field-table"
              v-model="tableNumber"
              trim
            ></b-form-input>
          </b-form-group>
          <b-button
            href="#"
            variant="success"
            :disabled="formValidation"
            @click="submitOrder()"
          >
            <b-icon icon="cart2"></b-icon> Pesan</b-button
          >
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      //      Note `isActive` is left out and will not appear in the rendered table
      fields: [
        "no",
        { key: "image", label: "Foto" },
        { key: "foodName", label: "Makanan" },
        { key: "note", label: "Keterangan" },
        { key: "pcs", label: "Jumlah" },
        { key: "price", label: "Harga" },
        { key: "priceTotal", label: "Total Harga" },
        { key: "delete", label: "Hapus" },
      ],
      order: null,
      prices: [],
      name: "",
      tableNumber: "",
    };
  },
  methods: {
    getImage(name) {
      return require("../assets/" + name);
    },
    loop() {
      this.carts.filter((item) => {
        this.prices.push(item.data.jumlah_pesanan * item.data.products.harga);
      });
    },
    remove(id, index) {
      this.prices.splice(index, 1);
      let data = { index: index, id: id };
      this.$store.dispatch("removeCartItem", {
        data,
      });
      console.log(id, "id");
      console.log(index, "index");
    },
    submitOrder() {
      this.$store.dispatch("removeAllCartItem", this.carts);
      this.$router.push({ path: "/success" });
      this.$emit("emit-toast", 1);
    },
  },
  mounted() {
    this.loop();
  },
  computed: {
    total: {
      get: function () {
        return this.prices.reduce((a, b) => a + b, 0);
      },
    },
    formValidation() {
      if (this.name.length > 0 && this.tableNumber.length > 0) {
        return false;
      }
      return true;
    },
    carts: {
      get: function () {
        return this.$store.state.cart;
      },
    },
  },
};
</script>

<style>
</style>