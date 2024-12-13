import { cartItems, type CartItem } from './Storage';

export function addCartItem({ id, name, imageSrc, quantity, price}: CartItem) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry && existingEntry.quantity >= 1) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + quantity,
    });

    localStorage.setItem('cartItems', JSON.stringify(cartItems.get()));
    return
  }

  cartItems.setKey(
    id,
    { 
      id, 
      name, 
      imageSrc, 
      price,
      quantity: 1 }
  );
  localStorage.setItem('cartItems', JSON.stringify(cartItems.get()));
}