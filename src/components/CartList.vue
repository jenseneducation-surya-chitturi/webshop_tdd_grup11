<template>
  <div class="cart-container">
    <button class="cart-default-button" @click.prevent="closeCartList(showCart)">Close</button>
    <h3 class="cart-header">Your order</h3>
    <CartItems
      v-for="(item,index) in cart"
      v-bind:key="index"
      @delete-item="deleteIncart(item)"
      v-bind:item="item"
    />
    <div class="totalAmount">
      <h3>
        Total
        <span class="dots"></span>
        {{ totalamount }} kr
      </h3>
    </div>
  </div>
</template>

<script>
import CartItems from "@/components/CartItems";

export default {
  name: "CartList",
  components: {
    CartItems,
  },
  props: ["cart", "showCart"],
  data() {
    return {};
  },
  methods: {
    closeCartList(showCart) {
      this.$emit("update-showCart", showCart);
    },
    deleteIncart(item) {
      this.$emit("delete-product", item);
    },
  },
};
</script>

<style scoped>
.cart-container {
  height: 33vh;
  width: 22vh;
  background: darkgrey;
}
</style>