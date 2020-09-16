<template>
  <div class="card-deck mb-3 text-center">
    <div v-for="product in products" :key="product.id" class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">{{ product.title }}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">{{ product.price | currency("NT$", 0) }}</h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li v-for="(value, key, index) in product.spec" :key="index">{{ value }}</li>
        </ul>
        <button type="button" 
                class="btn btn-lg btn-block btn-outline-primary" 
                :disabled="!product.inventory" 
                @click="addProductToCart(product)">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import {apple} from "@/api/shop";

// console.log(apple);

import { mapActions } from 'vuex';

export default {
  name: "Product",
  // data() {
  //   return {
  //     products: apple
  //   }
  // },
  props: ['products'],
  created() {
    // console.log(this.products);
  },
  methods: mapActions('cart', [
    'addProductToCart'
  ])
  // method: {
  //   ...mapActions('cart', [
  //     'addProductToCart'
  //   ])
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