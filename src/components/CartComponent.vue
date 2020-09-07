<template>
  <div class="cart-container">
    <button class="cart-default-button" @click="$emit('close')">Close</button>
    <div class="cart-list">
      <ul>
        <li v-for="items in cart" :key="items.id">
          <h1>{{items.color}}</h1>
          <h3>{{items.price}}</h3>
          <h3>{{items.price}}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartComponent",
  props: ['cart'],
  methods: {},
};
</script>

<style scoped>
.cart-container {
  height: 33vh;
  width: 22vh;
  background: darkgrey;
}
</style>