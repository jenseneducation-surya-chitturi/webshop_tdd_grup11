<template>
  <div class="container">
    <h1 class="product-head">
      Products
      <CartComponent v-bind:cart="cart" v-bind:count="count" @delete-productpage="deleteIncart" />
    </h1>
    <input type="text" v-model="search" />
    <div class="product-div">
      <ul>
        <li v-for="product in filteredList" :key="product.id">
          <div class="color-preview"></div>

          <h1 class="product-title">{{ product.title }}</h1>
          <img class="product-image" :src="require('../assets/' + product.image + '.png')"
           @click="$router.push({ name: 'detail', params: { id: product.id, product } })" />
          <h3>{{ product.price }} kr</h3>
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
    addToCart(product) {
      this.cart.push(product);
      this.count++;
      //   this.showCart = true;
    },
    deleteIncart(item) {
      const index = this.cart.findIndex((product) => product.id === item.id);
      this.cart.splice(index, 1);
      this.count--;
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
.product-head {
  font-weight: 800;
  font-size: 24px;
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

.product-image {
  width: 100px;
  height: 70px;
}
</style>
