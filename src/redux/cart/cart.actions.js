import CartActionTypes from "./cart.types";

export function toggleCartHidden() {
  return { type: CartActionTypes.TOGGLE_CART_HIDDEN };
}

export function addItem(item) {
  return { type: CartActionTypes.ADD_ITEM, payload: item };
}

export function removeItem(item) {
  return { type: CartActionTypes.REMOVE_ITEM, payload: item };
}
