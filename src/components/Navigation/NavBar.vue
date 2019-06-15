<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Ideal Classroom</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <router-link to="/signin">Sign In</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/signup">Sign Up</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
};
</script>
