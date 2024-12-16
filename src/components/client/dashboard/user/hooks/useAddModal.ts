import { useState } from "react";

export default function useAddModal():{
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
} {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(true);
  };

  return { isOpen, openModal, closeModal };
}