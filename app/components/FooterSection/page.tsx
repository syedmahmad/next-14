'use client';
import React, { useEffect, useState } from 'react';
import styles from './FooterSection.module.css';
import PinkLogo from '../../../public/images/svgs/pinkLogo';
import Phone from '../../../public/images/svgs/phone';
import Email from '../../../public/images/svgs/email';
import Instagram from '../../../public/images/svgs/insta';
import Facebook from '../../../public/images/svgs/facebook';

const FooterSection = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setMobile(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.mainHeading}>
          <PinkLogo />
        </h2>
      </div>
      <div className={styles.headingContainer}>
        <div className={styles.blueBox}>
          <Phone />
        </div>
        <div className={styles.blueBox}>
          <Email />
        </div>
        <div className={styles.blueBox}>
          <Instagram />
        </div>
        <div className={styles.blueBox}>
          <Facebook />
        </div>
      </div>
      <br />
      <br />
      {mobile ? (
        <>
          <div className={styles.headingContainer}>
            <h2 className={styles.paragraph}>
              <span className={styles.fontWeight}>Exagon Plus sagl</span> - Via
              Carlo Pasta <br /> 116850 Mendrisio Ticino, Switzerland - p.{' '}
              <br /> iva CH-501.4.021.857-9
            </h2>
          </div>
          <div className={styles.headingContainer}>
            <h2 className={styles.copyright}>
              © Copyright 2023 | privacy <br /> policy | Cookie policy | <br />{' '}
              Termini di servizio
            </h2>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default FooterSection;
