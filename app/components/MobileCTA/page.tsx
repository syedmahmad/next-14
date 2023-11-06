'use client';
import React from 'react';
import styles from './MobileCTA.module.css';
import { useScroll } from '../../hooks/useScroll';
import { useOpenModal } from '../../hooks/useOpenModal';

const MobileCTA = () => {
  const scroll = useScroll();
  const { show, handleOpen } = useOpenModal();
  return (
    !scroll && (
      <div className={styles.main}>
        <button
          className={styles.button}
          onClick={() => {
            if (!show) handleOpen();
          }}
        >
          richiedi demo gratuita
        </button>
      </div>
    )
  );
};

export default MobileCTA;
