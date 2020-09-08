<template>
  <div class="cartitem-container">
    <h6>{{item.title}}</h6>
    <button class="del-btn" @click="deleteItem">Delete</button>
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

<style scoped>
.cartitem-container{
display: inline-block;
margin-right: 20px;
}


.del-btn{
	background: #810000;
	color: #fff;
	outline: none;
}

.del-btn:hover{
	background: #ff0000;
	
}

.del-btn:active{
	background: #ff0000;
	
}
</style>