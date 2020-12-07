export const SET_BEST_FOODS = (state, data) => {
  state.bestFoods = data;
}

export const SET_FOODS = (state, data) => {
  state.foods = data;
}

export const SET_FOOD = (state, data) => {
  state.food = data;
}

export const SET_CART = (state, data) => {
  state.cart = data;
  console.log(data);
}

export const ADD_TO_CART = (state, data) => {
  state.cart.push(data)
}

export const REMOVE_CART_ITEM = (state, data) => {
  state.cart.splice(data, 1);
}

export const REMOVE_ALL_CART_ITEM = (state) => {
  state.cart = [];
}