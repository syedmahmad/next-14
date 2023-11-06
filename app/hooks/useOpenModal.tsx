'use client';

import { useMemo, useState, createContext, useContext, ReactNode } from 'react';

const initialState = {
  firstRender: false,
  show: false,
  handleClose: () => {},
  handleOpen: () => {},
};

const ModalContext = createContext(initialState);

export const OpenModalProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const handleOpen = () => {
    setShow(true);
    setFirstRender(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  const returnValues = useMemo(
    () => ({
      firstRender,
      show,
      handleClose,
      handleOpen,
    }),
    [show, firstRender],
  );

  return (
    <ModalContext.Provider value={returnValues}>
      {children}
    </ModalContext.Provider>
  );
};

export const useOpenModal = () => {
  const context = useContext(ModalContext);
  return context;
};
