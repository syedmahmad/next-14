import React from 'react';
import styles from './FooterSection.module.css';
import PinkLogo from '../../../public/images/svgs/pinkLogo';
import ContactIcons from '../../../public/images/svgs/contact-icons';

const FooterSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.mainHeading}>
          <PinkLogo />
        </h2>
      </div>
      <div className={styles.headingContainer}>
        <h2 className={styles.mainHeading}>
          <ContactIcons />
        </h2>
      </div>
      <div className={styles.headingContainer}>
        <h2 className={styles.paragraph}>
          Exagon Plus sagl - Via Carlo Pasta 116850 Mendrisio Ticino,
          Switzerland - p. iva CH-501.4.021.857-9
        </h2>
      </div>
      <div className={styles.headingContainer}>
        <h2 className={styles.copyright}>
          © Copyright 2023 | privacy policy | Cookie policy | Termini di
          servizio
        </h2>
      </div>
    </div>
  );
};

export default FooterSection;
