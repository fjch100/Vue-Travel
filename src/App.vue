<template>
  <div id="app">
    <app-navigator></app-navigator>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import TheNavigator from "./components/TheNavigator";
export default {
  components: {
    appNavigator: TheNavigator
  }
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.vue-school-active-class {
  color: rgb(58, 143, 235);
}
</style>
