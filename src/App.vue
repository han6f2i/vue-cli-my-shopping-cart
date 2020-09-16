<template>
  <div id="app">
    <MyHeader />
    <router-view></router-view>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
// import ProductList from "@/views/ProductList";
// import Home from "@/views/Home";

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
    // ProductList,
    // Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
