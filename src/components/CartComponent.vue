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

.cart{
	cursor: pointer;
}
.cart {
  background: white;
  display: flex;
  width: 1.6rem;
  height: 1.6rem;
  padding: 1rem;
  border-radius: 100%;
  float: right;
  margin-left: -20px;

}
.counter {
  display: flex;
  width: 2rem;
  height: 2rem;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: gray;
  font-size: 1.1rem;
  font-weight: 600;
  float: right;
  margin-right: -50px;
}
</style>