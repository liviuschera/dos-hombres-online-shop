import SHOP_DATA from "../../pages/shop/shop.data";

const INITIAL_STATE = { collections: SHOP_DATA };
// const INITIAL_STATE = SHOP_DATA;

export default function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
