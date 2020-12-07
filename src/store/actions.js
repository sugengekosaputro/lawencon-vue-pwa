import axios from 'axios';

export const getBestFoods = ({ commit }) => {
  axios.get('http://127.0.0.1:3000/best-products')
    .then(res => {
      //mutations
      commit('SET_BEST_FOODS', res.data);
    })
}

export const getFoods = ({ commit }) => {
  axios.get('http://127.0.0.1:3000/products')
    .then(res => {
      //mutations
      commit('SET_FOODS', res.data);
    })
}

export const getFood = ({ commit }, id) => {
  axios.get('http://127.0.0.1:3000/products/' + id)
    .then(res => {
      //mutations
      commit('SET_FOOD', res.data);
    })
}

export const getCarts = ({ commit }) => {
  axios.get('http://127.0.0.1:3000/keranjangs')
    .then(res => {
      commit('SET_CART', res.data);
    })
}

export const addToCart = ({ commit }, data) => {
  commit('ADD_TO_CART', data);

  axios.post('http://127.0.0.1:3000/keranjangs', data);
}

export const removeCartItem = ({ commit }, data) => {
  commit('REMOVE_CART_ITEM', data.index);
  axios.delete('http://127.0.0.1:3000/keranjangs/' + data.data.id)
}

export const removeAllCartItem = ({ commit }, data) => {
  commit('REMOVE_ALL_CART_ITEM');
  data.filter(item => {
    axios.delete('http://127.0.0.1:3000/keranjangs/'+item.id)
  })
}