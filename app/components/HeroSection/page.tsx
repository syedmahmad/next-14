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
            <br />
            <h4 className={styles.description}>
              Dai una svolta al tuo salone! <br /> Scegli Exagon Salon il
              software CRM usato dai più importanti hairstylist e franchising
              internazionali.
            </h4>
            <br />
            <div className={styles.IconDisplay}>
              <TrustPilot />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
