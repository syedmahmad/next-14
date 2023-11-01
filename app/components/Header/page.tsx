'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/svgs/logo';
import Phone from '../../../public/images/pngs/phone.png';
import styles from './Header.module.css';
import { useScroll } from '../../hooks/useScroll';

const Header = () => {
  const show = useScroll();
  return (
    <div className={`${show ? styles.main : styles.hidden}`}>
      <div className={styles._1stChild}>
        <div>
          <Logo />
        </div>
        <div className={styles.buttonContainer}>
          <a href="tel:3333334566">
            <div className={styles.buttonContainer}>
              <Image src={Phone} alt="Image" width={24} height={24} />
              <div className={styles.phoneNumberContainer}>333 3334566</div>
            </div>
          </a>
          <button className={styles.demoButton}>RICHIEDI DEMO GRATUITA</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
