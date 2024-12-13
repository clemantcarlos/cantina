import { useEffect } from "react";
// STORAGE
import { useStore } from "@nanostores/react";
import { isCartOpen, cartItems } from "@/storage/Storage";
// COMPONENTS
import RemoveCartItem from "@/storage/RemoveCartItem";

export default function Cart() {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);

  const cartItemsValues = Object.values($cartItems);

  useEffect(() => {
    const ls = localStorage.getItem("cartItems");
    if (ls !== null) {
      const parsedCartItems = JSON.parse(ls as string);
      Object.values(parsedCartItems).forEach((cartItem: any) => {
        cartItems.setKey(cartItem.id, cartItem);
      });
    }
  }, []);

  return (
    <aside
      className={
        $isCartOpen
          ? `w-full h-dvh p-10 overflow-auto mb-10
      bg-white text-primary 
      fixed top-0 left-0 z-20 translate-x-0 
      transition-all
      flex flex-col items-center`
          : `w-full h-dvh bg-transparent fixed top-0 left-0 z-10 translate-x-full transition-all`
      }
    >
      <header>
        <button
          onClick={() => isCartOpen.set(false)}
          className="fixed top-6 left-4 z-20"
        >
          <svg
            className="size-8 text-secondary rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
        <h1 className="text-4xl font-bold px-4 pb-2 border-b-4  border-primary">
          Mi carrito
        </h1>
      </header>
      {cartItemsValues.length ? (
        <div className="w-full h-full flex flex-col justify-between">
          <ul className="w-full flex flex-col gap-y-4 mt-4 items-center">
            {cartItemsValues.map(
              (cartItem) =>
                cartItem && (
                  <li key={cartItem.id} className="w-full flex items-center">
                    <img
                      className="size-32"
                      src={cartItem.imageSrc}
                      alt={cartItem.name}
                    />
                    <div className="flex-1 flex flex-col ml-4">
                      <h3 className="text-xl font-bold">{cartItem.name}</h3>
                      <p>Cantidad: {cartItem.quantity}</p>
                    </div>
                    <RemoveCartItem id={cartItem.id} />
                  </li>
                )
            )}
          </ul>
          <div className="w-full flex flex-col">
            <a
              href="/bill"
              onClick={() => isCartOpen.set(!$isCartOpen)}
              className="w-full py-2 mt-10
              text-center text-xl text-primary font-bold
              border-2 border-primary rounded-lg  
              focus:bg-primary focus:text-white 
              transition-all"
            >
              Realizar pedido
            </a>
            <br />
          </div>
        </div>
      ) : (
        <h3 className="text-5xl pt-10 font-bold">¡Tu carrito está vacío!</h3>
      )}
    </aside>
  );
}
