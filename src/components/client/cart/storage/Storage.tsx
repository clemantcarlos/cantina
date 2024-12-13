import { atom ,map } from 'nanostores'

// DASHBOARD MENU FUNCTIONALITY
export const isDashboardMenuOpen = atom(false);

// CART OPEN FUNCTIONALITY
export const isCartOpen = atom(false);

// CART ITEMS STORAGE
export type CartItem = {
  id: string;
  name: string;
  imageSrc: string;
  quantity: number;
  price: number
}

export const cartItems = map<Record<string, CartItem | undefined>>({});

// EL PICK ES UTIL PARA DEGLOSAR TIPO DE LOS OBJETOS
// export type ItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'imageSrc'>; 

