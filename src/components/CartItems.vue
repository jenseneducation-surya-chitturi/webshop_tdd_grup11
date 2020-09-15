<template>
  <div class="cartitem-container">
    <div class="cartitem-left">
      <h6>{{item.title}}</h6>
      <img class="cartitem-image" :src="require('../assets/' + item.image + '.png')" />
    </div>
    <OrderCounter class="order-container" :item="item" />
    <div class="cartitem-right">
      <button class="del-btn" @click="deleteItem">Delete</button>
    </div>
  </div>
</template>

<script>
import OrderCounter from "@/components/OrderCounter";
export default {
  name: "CartItems",
  props: ["item"],
  components: {
    OrderCounter,
  },
  data() {
    return {};
  },
  methods: {
    deleteItem(item) {
      this.$emit("delete-item", item);
    },
  },
};
</script>

<style scoped>
.cartitem-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  margin: 10px 20px;
  border: 2px solid grey;
  border-radius: 3px;
  box-shadow: 5px 5px 6px #00000080;
}
.cartitem-left {
  display: flex;
  flex-direction: column;
}
.cartitem-left h6 {
  font-size: 16px;
  margin: 0;
  align-items: center;
}
.cartitem-right button {
  margin: 10px;
  padding: 10px;
}

.del-btn:hover {
  background: #ff0000;
}

.del-btn:active {
  background: #ff0000;
}
.cartitem-image {
  width: 40px;
  height: 30px;
}
</style>