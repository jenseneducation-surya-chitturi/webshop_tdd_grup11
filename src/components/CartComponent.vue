<template>
  <div class="cart-container">
    <img class="cart" @click="showCart = !showCart" :src="require(`@/assets/images/cart.svg`)" />
    <div class="counter">{{count}}</div>
    <CartList
      v-bind:cart="cart"
      v-bind:showCart="showCart"
      @update-showCart="disableCart"
      @delete-product="deleteincartcomponent"
      v-if="showCart"
    />
  </div>
</template>

<script>
import CartList from "@/components/CartList";
export default {
  name: "CartComponent",
  components: {
    CartList,
  },
  props: ["cart", "count"],
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    disableCart() {
      return (this.showCart = false);
    },
    deleteincartcomponent(item, count) {
      this.$emit("delete-productpage", { item, count });
    },
  },
};
</script>

<style>
</style>