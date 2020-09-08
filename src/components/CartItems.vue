<template>
  <div class="cartitem-container">
    <h6>{{item.title}}</h6>
    <button @click="deleteItem">Delete</button>
    <h4>{{item.price}}</h4>
  </div>
</template>

<script>
export default {
  name: "CartItems",
  props: ["item"],
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

<style>
</style>