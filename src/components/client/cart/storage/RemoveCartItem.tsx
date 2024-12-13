import { cartItems, type CartItem } from './Storage';
import Trash from '@/icons/react/Trash';

type id = Pick<CartItem, 'id'>;

function removeCartItem({id} : id) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, undefined);
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems.get()));
}

export default function RemoveCartItem( { id }: id) {
  return <button onClick={() => removeCartItem({id})}
    className='size-10 text-white bg-red-500 p-2 rounded-full'>
    <Trash className='size-full' />
  </button>
}