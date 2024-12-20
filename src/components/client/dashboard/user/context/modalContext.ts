import { createContext, useContext } from "react";
import type { User } from "../types";

interface IModal {
  show: Boolean;
  hide: () => void;
  user?: User;
}
export const ModalContext = createContext<IModal | undefined>(undefined);

export function useModalContext(){
  const modal = useContext(ModalContext)

  if(modal === undefined) {
    throw new Error('useModalContext must be used within a ModalContext');
  }

  return modal;
}