import React from 'react';
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

export default function Page() {
  return (
    <div className={styles.mainContainer} id="main">
      <Header />
      <div>
        <div className={styles.heroSectionBackground}>
          <HeroSection />
        </div>
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
    </div>
  );
}
