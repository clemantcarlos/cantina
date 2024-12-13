interface IPaymentBtn {
  type: string;
}

export default function PaymentBtn({type}: IPaymentBtn) {
  
    if (type === 'whatsapp') {
      return (
        <button className="
            w-full bg-tranparent 
            text-[#005C4B] text-center font-bold 
            py-2 px-4 
            border-2 border-[#005C4B] rounded-lg 
            hover:bg-[#005C4B] hover:text-white transition-all">
            Whatsapp
        </button>
      );
    }
    if (type === 'payment') {
      return (
        <button className="bg-tertiary rounded-lg text-white text-center font-bold py-2 px-4 w-full hover:bg-primary transition-all">
          Pagar
        </button>
      );
    }
    return (
      <button className="bg-tranparent border-2">
        <span className="bg-black h-[2px] w-8 rounded-full animate-bounce-side-1"></span>
        <span className="bg-black h-[2px] w-10 rounded-full animate-bounce-side-2"></span>
        <span className="bg-black h-[2px] w-6 rounded-full animate-bounce-side-3"></span>
      </button>
    );
}