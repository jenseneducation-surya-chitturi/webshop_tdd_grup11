<template>
  <div class="home">
    <div class="container-home">
      <img alt="Vue logo" class="homepage-logo" src="../assets/wallpaper.png" />

      <h1>Best Deals are Here!</h1>
    </div>
  </div>
</template>

<script>
// import NavigationPage from "@/components/NavigationPage.vue";
//import ShoppingBag from "@/components/ShoppingBag.vue";

export default {
  name: "HomePage",
  components: {
    // NavigationPage,
    //ShoppingBag,
  },
};
</script>

<style scoped>
.container-home {
  background: #50a280;
  height: 700px;
}
img {
  margin: 100px;
}

.container-header {
  display: flex;
  /* background: linear-gradient(to bottom, #00ff95, #00ce78);	

   */
  background: #50a280;
}
</style>
