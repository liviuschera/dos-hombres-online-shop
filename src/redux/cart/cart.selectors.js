import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
console.log(selectCartItemsCount);
// console.log(sle);

// export function selectCartItemsCount(state) {
//   console.log("Count item selector called");

//   return {
//     itemCount: state.cart.cartItems.reduce(
//       (accumulatedQuantity, cartItem) =>
//         accumulatedQuantity + cartItem.quantity,
//       0
//     )
//   };
// }

// import { createSelector } from "reselect";

// const selectCart = state => state.cart;

// export const selectCartItems = createSelector(
//   [selectCart],
//   cart => cart.cartItems
// );

// export const selectCartHidden = createSelector(
//   [selectCart],
//   cart => cart.hidden
// );

// export const selectCartItemsCount = createSelector(
//   [selectCartItems],
//   cartItems =>
//     cartItems.reduce(
//       (accumulatedQuantity, cartItem) =>
//         accumulatedQuantity + cartItem.quantity,
//       0
//     )
// );

// export const selectCartTotalPrice = createSelector(
//   [selectCartItems],
//   cartItems =>
//     cartItems.reduce(
//       (accumulatedQuantity, cartItem) =>
//         accumulatedQuantity + cartItem.quantity * cartItem.price,
//       0
//     )
// );
