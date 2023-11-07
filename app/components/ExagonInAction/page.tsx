'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './ExagonInAction.module.css';
import ExagonInActionImage from '../../../public/images/pngs/ExagonInActionImage.png';
import { useFocus } from '../../hooks/useFocus';
import { useOpenModal } from '../../hooks/useOpenModal';

const ExagonInAction = () => {
  const handleClick = useFocus();
  const [mobile, setMobile] = useState(false);
  const { show, handleOpen } = useOpenModal();

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setMobile(true);
    }
  }, []);

  const buttonClick = () => {
    if (mobile) {
      if (!show) {
        handleOpen();
      }
    } else {
      handleClick();
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainHeading}>Vuoi vedere Exagon in azione?</h2>
      <div className={styles.centerBox}>
        <p className={styles.paragraph}>
          Dai una svolta al tuo salone! Compila il questionario per prenotare la
          demo gratuita e senza impegno con un nostro consulente.
        </p>
      </div>
      <br />
      <br />
      <div className={styles.centerBox}>
        <button className={styles.demoButton} onClick={buttonClick}>
          richiedi demo GRATUITA
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.centerBox}>
        <Image priority src={ExagonInActionImage} alt="Image" width={783} height={60} />
      </div>
    </div>
  );
};

export default ExagonInAction;
