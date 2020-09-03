<template>
  <div class="home">
    <div class="container">
      <NavigationPage />
      <img alt="Vue logo" src="../assets/wallpaper.png" />

      <h1>Best Deals are Here!</h1>
    </div>
  </div>
</template>

<script>
import NavigationPage from "@/components/NavigationPage.vue";
//import ShoppingBag from "@/components/ShoppingBag.vue";

export default {
  name: "HomePage",
  components: {
    NavigationPage,
    //ShoppingBag,
  },
};
</script>

<style scoped>
.container {
  background: #50a280;
}

.container-header {
  display: flex;
  /* background: linear-gradient(to bottom, #00ff95, #00ce78);	

   */
  background: #50a280;
}
</style>
