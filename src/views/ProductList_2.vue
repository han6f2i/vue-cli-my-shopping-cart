<template>
  <div class="container">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Pricing</h1>
      <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
    </div>
    <Product />
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
// 
// export default {
//   computed: mapState({
//     products: state => state.products.all
//   }),
//   methods: mapActions('cart', [
//     'addProductToCart'
//   ]),
//   created () {
//     this.$store.dispatch('products/getAllProducts')
//   }
// }

// import {apple} from "@/api/shop";

// console.log(apple);

import Product from '@/components/Product.vue'

export default {
  name: "ProductList",
  components: { Product }  
  // data() {
  //   return {
  //     products: apple
  //   }
  // },
  // created() {
  //   console.log(this.products);
  // }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 960px;
}

.pricing-header {
  max-width: 700px;
}

.card-deck .card {
  min-width: 220px;
}
</style>