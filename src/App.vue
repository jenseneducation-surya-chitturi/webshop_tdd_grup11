<template>
  <div id="app">
    <NavigationPage />
    <router-view />
  </div>
</template>

<script>
import NavigationPage from "@/components/NavigationPage.vue";
export default {
  name: "App",
  components: {
    NavigationPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
