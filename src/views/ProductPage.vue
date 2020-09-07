<template>
  <div class="container">
    <h1>
      Products
      <img class="cart" @click="clickCart" v-bind:src="require(`@/assets/images/cart.svg`)" />
      <CartComponent
		v-bind="cart"
        @close="showCart = false"
        v-if="showCart"
      />
    </h1>

    <div class="counter">{{count}}</div>
    <input type="text" v-model="search" />
    <div class="product-div">
      <ul>
        <li v-for="product in filteredList" :key="product.id">
          <div class="color-preview"></div>

          <h1>{{ product.title }}</h1>
          <h4>{{ product.color }}</h4>
          <h3>{{ product.price }}kr</h3>
          <button class="addcart" @click="addToCart(product)">ADD CART</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CartComponent from "../components/CartComponent";
export default {
  name: "ProductPage",

  components: { CartComponent },
  data() {
    return {
      search: "",
      products: [],
      cart: [],
      count: 0,
      showCart: false,
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
      return this.products.filter((product) => {
        return product.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    clickCart() {
      this.showCart = true;
    },
    addToCart(product) {
      this.cart.push(product);
      this.count++;
      console.log(product);

      //   this.showCart = true;
    },
  },
};
</script>
<style scoped>
.container {
  background: linear-gradient(#57a859, #50a280);
  max-width: 1440px;
  padding: 1rem 2rem;
  margin: 0 auto 100px auto;
}
ul {
  list-style: none;
  display: grid;
  gap: 6rem 1rem;
  grid-template-columns: repeat(3, 1fr);
}
li {
  background: whitesmoke;
  box-shadow: 5px 5px 6px #00000080;
  margin: 20px;
  border-radius: 7.25px;
  height: 300px;
  width: 280px;
}
h1 {
  font-weight: 400;
  font-size: 20px;
  top: 0;
  left: 0;
}

h3 {
  font-weight: 300;
  font-size: 20px;
  top: 0;
  left: 0;
}

h4 {
  font-weight: 300;
  font-size: 18px;
  top: 0;
  left: 0;
}

.order-counter {
  top: 0;
  left: 0;

  justify-content: center;
}
input[type="text"] {
  height: 30px;
  width: 20%;
  border-radius: 25.5px;
  border: none;
  outline: none;
  padding-left: 15px;
}
.addcart {
  color: #fff;
  font-size: 16px;
  background: #4dcc62;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 0.8rem;
  font-weight: bold;
  cursor: pointer;
}

.addcart:hover {
  background: #57e26e;
}

.addcart:active {
  border-radius: 12.5px;
}
.icon {
  padding-left: 300px;
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
  margin-top: -30px;
  margin-right: -50px;
}
</style>
