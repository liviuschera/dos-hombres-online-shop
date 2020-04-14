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

export function removeOneOrTheWholeItemFromCart(cartItems, cartItemToRemove) {
  cartItems.map((cartItem, index) => {
    if (cartItem.id === cartItemToRemove.id) {
      if (cartItem.quantity > 1) {
        return (cartItem.quantity = cartItem.quantity - 1);
      } else {
        return cartItems.splice(index, 1);
      }
    } else {
      return cartItem;
    }
  });
  return [...cartItems];

  // SECOND SOLUTION

  // const existingCartItem = cartItems.find(
  //   cartItem => cartItem.id === cartItemToRemove.id
  // );

  // if (existingCartItem.quantity === 1) {
  //   return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  // }
  // return cartItems.map(cartItem =>
  //   cartItem.id === cartItemToRemove.id
  //     ? { ...cartItem, quantity: cartItem.quantity - 1 }
  //     : cartItem
  // );
}

export function removeItemFromCart(cartItems, cartItemToRemove) {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
}
