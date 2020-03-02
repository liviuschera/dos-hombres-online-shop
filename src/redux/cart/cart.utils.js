export function addItemToCart(cartItems, cartItemToAdd) {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(cartItem => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export function removeItemFromCart(cartItems, cartItemToRemove) {
  const existingCartItemIndex = cartItems.findIndex(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItemIndex >= 0) {
    cartItems.splice(existingCartItemIndex, 1);
  }
  return [...cartItems];
}
