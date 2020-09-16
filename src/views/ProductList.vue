<template>
  <div class="container">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">{{ $route.params.brand }}</h1>
      <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
    </div>
    <Product :products="items"/>
    <hr>
    <ShoppingCart/>
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

// import {products} from "@/api/shop";

// console.log(apple);

import Product from '@/components/Product.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { mapState } from 'vuex';

export default {
  name: "ProductList",
  components: { Product, ShoppingCart },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  computed: mapState({
    items: state => state.products.all
  }),
  methods: {
    fetchData () {
      /*
      // console.log("fetchData");
      // console.log(this.items);
      // console.log(this.all);
      // console.log(products);
      // console.log(this.$route.params.brand);
      // console.log(products.get[this.$route.params.brand]);
      // let m = this.all;
      // console.log(m.get(this.$route.params.brand));
      // this.items = this.all.get(this.$route.params.brand);
      // console.log(this.items);
      */

      // console.log("brand:" + this.$route.params.brand);
      this.$store.dispatch('products/getBrandProducts', {
        key: this.$route.params.brand
      });
    }
  },
  // data() {
  //   return {
  //     // items: [],
  //     // items: this.$store.state.products.all,
  //     // all: products
  //   }
  // },
  created() {
    // console.log("created");
    // this.fetchData();
    this.$store.dispatch('products/getBrandProducts', {
      key: this.$route.params.brand
    });
  }
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