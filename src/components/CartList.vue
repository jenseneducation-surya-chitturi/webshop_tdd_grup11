<template>
  <div class="cart-container">
    <button class="cart-default-button" @click.prevent="closeCartList(showCart)">Close</button>
    <h3 class="cart-header">Your order</h3>
	<ul>
		<li>   <CartItems
      v-for="(item,index) in cart"
      v-bind:key="index"
      @delete-item="deleteIncart(item)"
      v-bind:item="item"/></li>
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
  height:70%;
  width:70%;
  background: rgb(159, 240, 195);
  display: grid;
  /* grid-template-rows: repeat(3,1fr); */
  position: absolute;
  }



li{
	list-style: none;
		/* padding-top: 10px;
		margin-top:11px ; */
}
.cart-default-button{
	color: #fff;
	cursor: pointer;
	height: 20px;

}

.cart-default-button:hover{
	background-color: #222;

	
}
.cart-header{
margin: 10px 10px;
}
</style>