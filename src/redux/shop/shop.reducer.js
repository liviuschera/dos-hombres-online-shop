import ShopActionTypes from "./shop.types";

const INITIAL_STATE = { collections: [] };

export default function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ShopActionTypes.TOGGLE_IS_LOADING:
      return { ...state, isLoading: !state.isLoading };
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
}
