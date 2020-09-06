<template>
  <div class="about-container">
  <NavigationPage />
    <div class="wrapper">
      <img class="" src="" alt="logo" />
      <h1 class="title">{{ title }}</h1>
      <p class="description">{{ description }}</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavigationPage from "@/components/NavigationPage.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AboutPage",
  components: {
  NavigationPage,
  Footer
  },
  data() {
    return {
      title: "About us",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
  }
};
</script>

<style scoped>
.about-container {
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
</style>
