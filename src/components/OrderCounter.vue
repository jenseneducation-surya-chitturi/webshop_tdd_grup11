<template>
  <div class="order-counter">
    <button v-show="orderCount >= 1 " @click="orderCount--">-</button>
    <p>{{orderCount}}</p>
    <button @click="orderCount++">+</button>
  </div>
</template>

<script>
export default {
  name: "OrderCounter",

  data() {
    return {
      orderCount: 0,
    };
  },
};
</script>

<style scoped>
/* .order-counter{
	display: grid;
	} */
button {
  height: 30px;
  width: 30px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  background: linear-gradient(to bottom, #222, #333);
  color: #fff;
  outline: none;
  animation: 0.3s all ease-in-out;
  border-radius: 10px;
  /* margin-bottom: 20px; */
  /* margin-right: 20px; */
margin: 15px;

}

.order-counter {
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
