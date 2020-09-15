<template>
  <div class="cart-container">
    <button class="cart-default-button" @click.prevent="closeCartList(showCart)">Close</button>
    <button class="cart-default-button" @click.prevent="emptyCart(cart)">Empty cart</button>
    <h3 class="cart-header">Your order</h3>
    <ul>
      <li>
        <CartItems
          v-for="(item,index) in cart"
          v-bind:key="index"
          @delete-item="deleteIncart(item)"
          v-bind:item="item"
        />
      </li>
    </ul>
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
    return {
      totalamount: 0,
    };
  },
  methods: {
    closeCartList(showCart) {
      this.$emit("update-showCart", showCart);
    },
    deleteIncart(item) {
      this.$emit("delete-product", item);
    },
    emptyCart(cart) {
      this.$emit("empty-cart", cart);
    },
  },
};
</script>

<style scoped>
.cart-container {
  background: rgb(159, 240, 195);
  /* grid-template-rows: repeat(3,1fr); */
  position: absolute;
  width: 60%;
  min-height: 40%;
  top: 185px;
  right: 10px;
}
.cart-default-button {
  margin: 20px;
  border: 2px solid grey;
  border-radius: 5px;
  box-shadow: 5px 5px 6px #00000080;
}

li {
  list-style: none;
  /* padding-top: 10px;
		margin-top:11px ; */
}
.cart-header {
  margin: 10px 10px;
}
</style>