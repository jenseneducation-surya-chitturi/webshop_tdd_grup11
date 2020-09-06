<template>
  <div class="container">
    <h1>
      Products
      <img class="cart" @click="clickCart" v-bind:src="require(`@/assets/images/cart.svg`)" />
    </h1>
    <div class="counter">{{count}}</div>
    <input class="search" type="text" v-model="search" />
    <div class="product-div">
      <ul>
        <li v-for="product in filteredList" :key="product.id">
          <div class="color-preview"></div>

          <h1>{{ product.title }}</h1>
          <h4>{{ product.color }}</h4>
          <h3>{{ product.price }}</h3>
          <OrderCounter />

          <button class="addcart" @click="addToCart(product)">ADD CART</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import OrderCounter from '../components/OrderCounter'
import axios from "axios";
export default {
  name: "ProductPage",
  
  components: {
  OrderCounter
  },
  data() {
    return {
      search:"",
      products: [],
      cart: [],
      count: 0,
      showCart: false
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/products`);
      this.products = res.data;
    } catch (e) {
      console.log(e);
    }
  },
   computed: {
    filteredList() {
      return this.products.filter(product => {
        return product.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
   methods: {
       clickCart() {
            this.$router.push("/cart");
        },
        addToCart(product) {
            this.cart.push(product);
            this.count++;
			console.log(product);
			
		},
		removeFromCart(product) {
            this.cart.push(product);
            this.count--;
            console.log(product);
        }
    }
 
};
</script>
<style scoped>
.container {
  background: linear-gradient(#57a859, #50a280);
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.color-preview {
  height: 50%;
  border-radius: 7.25px;
  background: #4451c0;
  background-size: cover;
  /* border: 1px solid black; */
}

.product-div {
  display: flex;
  flex-wrap: wrap;
}

.cart{
	cursor: pointer;
	height: 100px;
	width: 80px;
	padding-top: 15px;
}

.color-info {
  position: relative;
  padding: 0;
}
ul {
  background: none;
}

li {
  background: whitesmoke;
  box-shadow: 5px 5px 6px #00000080;
  margin: 10px;
  border-radius: 7.25px;
  /* padding: 15px; */
  height: 420px;
  width: 200px;
}

h1 {
  font-weight: 300;
  font-size: 16px;
  top: 0;
  left: 0;
  /* padding:5px; */
}

h3 {
  font-weight: 300;
  font-size: 14px;
  top: 0;
  left: 0;
  /* padding:5px; */
}

h4 {
  font-weight: 300;
  font-size: 14px;
  top: 0;
  left: 0;
  /* padding:5px; */
}

.order-counter {
  top: 0;
  left: 0;
  /* padding:5px; */
  justify-content: center;
}
.search{
	height: 40px;
	width: 80%;
	border-radius: 25.5px;
	border: none;
	outline: none;
	padding-left: 15px;
}
.addcart {
  color: #fff;
  font-size: 14px;
  background: #4dcc62;
  /* height: 60px;
	width: 190px;
	margin: 120px; */
  border: none;
  border-radius: 7.35px;
  outline: none;
}

.addcart:hover {
  background: #57e26e;
}

.addcart:active {
  border-radius: 12.5px;
}
</style>
