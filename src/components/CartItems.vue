<template>
  <div class="cartitem-container">
    <h6>{{item.title}}</h6>
    <OrderCounter />
    <button class="del-btn" @click="deleteItem">Delete</button>
    <h4>{{item.price}}</h4>
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
  display: inline-block;
  margin-right: 20px;
}


.del-btn:hover {
  background: #ff0000;
}

.del-btn:active {
  background: #ff0000;
}
</style>