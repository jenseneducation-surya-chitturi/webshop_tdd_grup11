<template>
  <div class="order-counter">
    <div class="order-left">
      <button class="decrease-counter" @click="countDecrease">-</button>
      <p>{{value}}</p>
      <button class="increase-counter" @click="countIncrease">+</button>
    </div>
    <div class="order-right">
      <p class="order-item">Per item :{{ item.price}}</p>
      <p class="total-items">Total : {{value* item.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCounter",
  props: ["item"],

  data() {
    return {
      value: 0,
    };
  },
  methods: {
    countDecrease() {
      if (this.value > 0) {
        this.value--;
      }
    },
    countIncrease() {
      this.value++;
    },
  },
};
</script>

<style scoped>
button {
  height: 30px;
  width: 30px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background: linear-gradient(to bottom, #222, #333);
  color: #fff;
  outline: none;
  animation: 0.3s all ease-in-out;
  border-radius: 5px;
  /* margin-bottom: 20px; */
  /* margin-right: 20px; */
  margin: 15px;
}

.order-counter {
  display: flex;
  flex-direction: row;
}
.order-right {
  display: flex;
  flex-direction: column;
}
.order-right p {
  font-size: 16px;
  margin: 5px;
}
.order-left {
  display: flex;
  flex-direction: row;
}

button:hover {
  background: linear-gradient(to bottom, #111, #000, #111);
}

.p {
  font-style: oblique;
  font-family: serif, Helvetica, sans-serif;
}

button:active {
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background: linear-gradient(to bottom, #111, #000, #111);
}
</style>
