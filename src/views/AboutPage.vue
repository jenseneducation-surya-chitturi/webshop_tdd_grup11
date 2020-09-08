<template>
  <div class="about-container">
    <h1>Buy the best value Products</h1>
    <div class="wrapper">
      <img class="Logo" src="../assets/shopLogo.png" alt="logo" />
      <h1 class="title">{{ title }}</h1>
      <p class="description">{{ description }}</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "Aboutpage",
  components: {
    Footer,
  },
  data() {
    return {
      title: "About us",
      description:
        "If you would like to experience the best of online shopping for men, women and kids , you are at the right place. MyShop is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at MyShop from the comfort of your home and get your favourites delivered right to your doorstep.",
    };
  },
};
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #50a280;
  width: auto;
}
.wrapper {
  padding: 20px 32px;
  /* padding: 2rem 0; */
}
.title {
  color: white;
  font-weight: 600;
  font-size: 3rem;
  margin: 50px;
}
.description {
  font-weight: bold;
  margin: 100px 0;
  text-align: center;
  height: 70vh;
}
.Logo {
  height: 80px;
}
</style>
