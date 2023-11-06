'use client';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Header from './components/Header/page';
import HeroSection from './components/HeroSection/page';
import OurCustomer from './components/OurCustomer/page';
import CompleteSolution from './components/CompleteSolution/page';
import VirtualReceptionist from './components/VirtualReceptionist/page';
import GrowSalon from './components/GrowSalon/page';
import AlreadyChosen from './components/AlreadyChosen/page';
import ExagonInAction from './components/ExagonInAction/page';
import FooterSection from './components/FooterSection/page';
import Form from './components/Form/page';
import MobileCTA from './components/MobileCTA/page';
import FormMobile from './components/FormMobile/page';
import { useOpenModal } from './hooks/useOpenModal';

export default function Page() {
  const [mobile, setMobile] = useState(false);
  const { show, firstRender } = useOpenModal();

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setMobile(true);
    }
  }, []);

  return (
    <div className={styles.mainContainer} id="main">
      <Header />
      <div className={styles.positionRelative}>
        <div className={styles.heroSectionBackground}>
          <HeroSection />
        </div>
        <div className={styles.formArea}>
          <Form />
        </div>
        {mobile && !firstRender && (
          <div
            className={
              show ? styles.formMobileArea : styles.formMobileAreaHidden
            }
          >
            <FormMobile />
          </div>
        )}
      </div>
      <div className={styles.ourCustomerBackground}>
        <OurCustomer />
      </div>
      <div className={styles.completeSolutionBackground}>
        <CompleteSolution />
      </div>
      <div className={styles.virtualReceptionist}>
        <VirtualReceptionist />
      </div>
      <div className={styles.growSalon}>
        <GrowSalon />
      </div>
      <div className={styles.alreadyChosen}>
        <AlreadyChosen />
      </div>
      <div className={styles.exagonInAction}>
        <ExagonInAction />
      </div>
      <div className={styles.footerSection}>
        <FooterSection />
      </div>
      {mobile && <MobileCTA />}
    </div>
  );
}
