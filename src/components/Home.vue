<template>
  <v-container>
    <h1>hello</h1>
    <router-link to="/signin">Sign In</router-link>
    <router-link to="/signup">Sign Up</router-link>
    <router-view></router-view>
    <v-footer class="pa-3">
      <div class="text-xs-center">Andreas Soedharto &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-container>
</template>

<script>
export default {};
</script>

