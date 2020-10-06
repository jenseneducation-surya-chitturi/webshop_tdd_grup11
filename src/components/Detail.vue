<template>  
     <div class="id" v-if="product">
    <div class="id-content">
        <h1 class="title">
          {{ product.title }}
          <span class="close" @click="$router.go(-1)">&times;</span>
        </h1>
         <div class="content-left">
         <img class="product-image" :src="require('../assets/' + product.image + '.png')" 
        style="width:400px; height:250px;"/>
      </div>
      <div class="content-right">
        <h2>{{ product.price }} kr</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
    
      </div>
    </div>
  </div>

</template>

<script>
export default {
   props: {
    product: {
      type: Object,
      default: null,
    },
  },
  
};
</script>

<style scoped>
.id{
  width: 900px;
  box-shadow:-2px 0px 33px 0px rgba(0,0,0,0.75);
display: flex;
margin-left:200px;
float: left;
}
p{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  margin-left: 40px;
  margin-right: 40px;
}
.close{
  display: flex;
  float:right;
  margin-right: 10px;

        
}
button {
      width: 20%;
      border: none;
      padding: .8rem;
      color: white;
      font-size: 24px;
      cursor: pointer;
      font-weight: bold;
      border-radius: 10px;
      background: grey;
    }

</style>