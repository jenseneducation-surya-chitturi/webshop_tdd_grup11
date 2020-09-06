<template>
	<div class="wrapper">
		<button class="sub" @click="updateCart(product, 'subtract')">-</button>
		<span>{{product.quantity}}</span>
		<button class="add" @click="updateCart(product, 'add')">+</button>
	</div>
</template>
<script>
	export default {
    props: ['product'],
	 methods: {
      updateCart(product, updateType) {      
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === product.id) {
            if (updateType === 'subtract') {
              if (this.products[i].quantity !== 0) {
                this.products[i].quantity--;
              }
            } else {
              this.products[i].quantity++;
            }
            break;
          }
        }
      }
    }		
	};
</script>