import { useState } from "react";

interface ISpinner {
  show: boolean;
  spinnerActive: () => void;
  spinnerInactive: () => void;
}

export default function useSpinner(): ISpinner {
  const [show, setShow] = useState(false);

  const spinnerInactive = () => {
    setShow(true);
  };
  const spinnerActive = () => {
    setShow(false);
  };


  return {
    show,
    spinnerActive,
    spinnerInactive,
  };
}