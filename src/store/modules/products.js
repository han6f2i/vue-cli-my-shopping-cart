// import products from '../../api/shop'
import shop from '../../api/shop'
import { products } from '../../api/shop'

// initial state
const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  // getAllProducts ({ commit }) {
  //   shop.getProducts(products => {
  //     commit('setProducts', products)
  //   })
  // }
  getBrandProducts ({ commit }, payload) {
    // console.log("getBrandProducts");
    // console.log(products);
    // console.log("shop.getProducts()");
    console.log(shop.getProducts());
    // console.log(payload);
    // commit('setProducts', shop.getProducts().get(payload.key));
    commit('setProducts', products.get(payload.key));
  }
}

// mutations
const mutations = {
  setProducts (state, items) {
    state.all = items;
    // console.log("items:");
    // console.log(items);
  },
  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
