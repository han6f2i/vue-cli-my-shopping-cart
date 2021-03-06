import shop from '../../api/shop'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null
})

// getters
const getters = {
  // cartProducts: (state, getters, rootState) => {
  cartProducts: (state) => {
    console.log("cartProducts");
    return state.items;
    // state.items.forEach(ele => console.log(ele.id));
    // return state.items.map(({ id, quantity }) => {
    //   const product = rootState.products.all.find(product => product.id === id)
    //   return {
    //     title: product.title,
    //     price: product.price,
    //     quantity
    //   }
    // })
  },

  cartTotalPrice: (state, getters) => {
    console.log("cartTotalPrice");
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id, title: product.title, price: product.price })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
  }
}

// mutations
const mutations = {
  pushProductToCart (state, { id, title, price }) {
      
    state.items.push({
      id,
      title,
      price,
      quantity: 1
    })
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  setCartItems (state, { items }) {
    state.items = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
