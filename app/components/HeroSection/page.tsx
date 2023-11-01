import React from 'react';
import styles from './HeroSection.module.css';
import TrustPilot from '../../../public/images/svgs/trustPilot';

const HeroSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}></div>
        <div className={styles.displayMain}>
          <div className={styles.textArea}>
            <h1 className={styles.heading}>
              SCEGLI EXAGON SALON, IL SOFTWARE CRM PER PARRUCCHIERI #1 IN ITALIA
            </h1>
            <h4 className={styles.description}>
              Dai una svolta al tuo salone! Exagon Salon ti consente di gestire
              il salone a 360° gradi in modo semplice per tutti gli aspetti
              della tua attività.Scegli il software CRM scelto dai più
              importanti hairstylist e franchising internazionali.
            </h4>
            <br />
            <TrustPilot />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
