'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './VirtualReceptionist.module.css';
import VirtualReceptionistImage from '../../../public/images/pngs/virtualReceptionist.png';
import { useFocus } from '../../hooks/useFocus';
import { useOpenModal } from '../../hooks/useOpenModal';

const VirtualReceptionist = () => {
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
      <div className={styles.displayMain}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            Un Receptionist virtuale che lavora per te 24/7
          </h1>
          <p className={styles.paragraph}>
            Mentre tu ed il tuo team lavorate per rendere le donne più belle,
            noi ci occupiamo del tuo salone per renderlo più produttivo e
            organizzato.
          </p>
          <p className={styles.paragraph}>
            Le clienti possono prenotarsi in modo autonomo sul tuo sito o
            attraverso i social media (google, instagram e facebook). Inoltre le
            clienti ricevono notifiche automatizzate con Whatsapp o SMS per
            ridurre al minimo le cancellazioni ed i ritardi delle clienti.
          </p>
          <br />
          <button className={styles.button} onClick={buttonClick}>
            richiedi demo GRATUITA
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image priority
          src={VirtualReceptionistImage}
          alt="Image"
          width={550}
          height={60}
        />
      </div>
    </div>
  );
};

export default VirtualReceptionist;
