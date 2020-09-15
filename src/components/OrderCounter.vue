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
  height: 15px;
  width: 15px;
  font-size: 12px;
  font-weight: bold;
  border: none;
  background: linear-gradient(to bottom, #222, #333);
  color: #fff;
  outline: none;
  animation: 0.3s all ease-in-out;
  border-radius: 2px;
  /* margin-bottom: 20px; */
  /* margin-right: 20px; */
  margin: 5px;
}

.order-counter {
  display: flex;
  flex-direction: row;
}
.order-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order-right > p {
  font-size: 8px;
  margin: 2px;
}
.order-left {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
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
