<template>
  <div class="container">
    <h1> Products
            <img class="cart" @click="clickCart" v-bind:src="require(`@/assets/images/cart.svg`)">
        </h1>
        <div class="counter">{{count}}</div>
       <input type="text" v-model="search">
    <div class="product-div">
      <ul>
        <li v-for="product in filteredList" :key="product.id">
          <h1>{{ product.title }}</h1>
          <h4>{{ product.color }}</h4>
          <h3>{{ product.price }}</h3>
        <button class="addcart" @click="addToCart(product)">ADD CART</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductPage",
  
  components: {
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
        }
    }
 
};
</script>

<style scoped>
.container {
  background: #50a280;
}

.product-div {
  display: flex;
  flex-wrap: wrap;
  background: #50a280;
}

ul {
  width: 80%;
}
li {
  background: whitesmoke;
  box-shadow: 5px 5px 6px;
  /* margin: 10px; */
  border-radius: 7.25px;

  /* margin: 0 auto; */
}
</style>
