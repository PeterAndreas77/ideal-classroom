<template>
  <v-app>
    <div id="app">
      <NavBar/>
      <router-view></router-view>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Navigation/Footer";
export default {
  name: "app",
  components: {
    NavBar,
    Footer
  }
};
</script>
