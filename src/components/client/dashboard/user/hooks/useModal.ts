import { useState } from "react";
import type { User } from "../types";

export default function useModal() {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [modalName, setModalName] = useState<string>('');
  const [user, setUser] = useState<User | undefined>(undefined);

  const openModal = ({modalName, user}:{modalName:string, user?: User}) => {
    if(user){
      setUser(user);
    }
    setModalName(modalName);
    setShowModal(true);
  }

  const closeModal = () =>{
    setModalName('default');
    setShowModal(false);
  }
  
  return { showModal, modalName, user, openModal, closeModal };
}