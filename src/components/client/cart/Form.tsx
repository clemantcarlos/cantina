import { addCartItem } from "@/client/cart/storage/AddCartItem";
import Counter from "@/client/cart/item/Counter";
import type { APIResponse } from "@/utils/interfaces";
import { useState } from "react";


function Toast({message, show}: {message: string, show: boolean}) {
  return <>
    <div id="toast-simple" 
      className = { show ?
        "fixed bottom-4 left-4 flex items-center max-w-xs p-4 space-x-4 rtl:space-x-reverse text-primary bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-xl animate-bounce transition-all w-[300]":
        "fixed bottom-4 left-4 flex items-center max-w-xs p-4 space-x-4 rtl:space-x-reverse text-primary bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-xl animate-bounce transition-all w-[300]transition-all duration-300 opacity-0"
      } 
      role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" 
        className="size-10 text-green-500" 
        width="44" 
        height="44" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"> 
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l5 5l10 -10" />
      </svg>
      <div className="text-lg font-bold">
      {message}
      </div>
    </div>
  </>
}


export default function Form(item: APIResponse) {
  const [showToast, setShowToast] = useState(false);
  const {id, nombre, descripcion, cantidad, precio, categoria, url_imagen} = item;
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const $form = e.target.parentNode.parentNode.parentNode
    const formData = new FormData($form);
    const quantity = formData.get('quantity');
    const price = formData.get('price');

    addCartItem({
      id,
      name: nombre,
      imageSrc: url_imagen,
      quantity: Number(quantity),
      price: Number(price)
    })

    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  };

  return (
    <form
      onSubmit={(e:any)=> e.preventDefault()}
      className="flex flex-col border border-secondary rounded-xl p-2
      md:border-none md:grid md:grid-cols-2 md:gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ul className="hidden md:grid grid-cols-1 grid-rows-3 gap-4">
          <li className="border border-secondary rounded-xl bg-secondary"></li>
          <li className="border border-secondary rounded-xl bg-secondary"></li>
          <li className="border border-secondary rounded-xl bg-secondary"></li>
        </ul>
        <img src={item.url_imagen} className="w-60 mx-auto md:w-full md:rounded-lg md:col-span-2" alt="" />
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 border-b-secondary flex items-center gap-2 md:gap-4">
          {nombre}
          <span>{cantidad}</span>
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            {categoria}
          </span>
        </h1>
        <span className="text-tertiary mb-4 md:hidden">{descripcion}</span>
        <strong className="hidden md:block">Acerca de este producto</strong>
        <ul className="hidden md:block text-tertiary pl-5 *:list-disc">
          <li>Pollo 100% Natural</li>
          <li>Sin antibioticos</li>
          <li>Sin hormonas o esteroides</li>
          <li>21 gramos de proteina, 0 gramos de grasas trans</li>
          <li>Perfecto para asar</li>
        </ul>
        <div className="flex flex-col lg:w-1/2">
          <Counter price={String(precio)} />
          <button type="submit" onClick={handleSubmit}
            className='bg-primary rounded-lg text-white text-center font-bold py-2 px-4 hover:pointer'>
            Agregar al carrito
          </button>
        </div>
        <Toast message={"Agregado al carrito"} show={showToast}/>
      </div>
    </form>
  );
}
