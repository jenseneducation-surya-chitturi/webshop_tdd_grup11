<template>
  <div class="container">
    <h1>Products</h1>
   
    <!-- <Cart/> -->
<input type="text" v-model="search">
    <div class="product-div">
      <ul>
        <li v-for="product in filteredList" :key="product.id">
          <h1>{{ product.title }}</h1>
          <h4>{{ product.color }}</h4>
          <h3>{{ product.price }}</h3>
        <OrderCounter :product="product"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import Cart from "../components/Cart"
import OrderCounter from "../components/OrderCounter"
// import CartComponent from "../components/CartComponent"
export default {
  name: "ProductPage",
  
  components: {
    OrderCounter,
  },
  data() {
    return {
      search:"",
      products: [],
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
