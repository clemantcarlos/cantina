import { useEffect, useState } from "react";

export interface CounterProps {
  price: string;
}

export default function Counter(props: CounterProps) {
  const { price } = props;

  const [ count, setCount] = useState<number>(1);
  const [ itemPrice, setItemPrice] = useState<string>(price);

  useEffect(() => {
    const parsedPrice = Number(price);
    const totalPrice = parsedPrice * count;
    setItemPrice(String(totalPrice));
  }, [count]);

  return (
    <div className="flex w-full justify-between items-center gap-x-4 mb-4 text-primary">
      <div className="flex-1 flex items-center w-1/3">
        <span className="text-3xl font-bold">$</span>
        <input className="w-full border-none outline-none text-3xl font-bold"
          name="price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <button className="minus text-primary font-bold border border-secondary px-2 rounded-l-lg"
          onClick={() => { if(count > 1) setCount(count - 1) }}>
          -
        </button>
        <input type="number" 
          name="quantity"
          pattern="^[1-9]\d*" 
          className="w-16 text-center border border-secondary text-primary"
          onKeyDown={(e) => e.preventDefault()} 
          onChange={(e) => setCount(Number(e.target.value))}
          value={count}/>
        <button className="plus text-primary font-bold border border-secondary px-2 rounded-r-lg"
          onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}