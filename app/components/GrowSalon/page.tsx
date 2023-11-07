'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './GrowSalon.module.css';
import GrowSalonImage from '../../../public/images/pngs/frame-image.png';
import CorriereDellaSera from '../../../public/images/pngs/corriere-della-sera.png';
import Cosmoprof from '../../../public/images/pngs/cosmoprof.png';
import LogoIstituzionaleCosmeticaItaliaNoSfondo from '../../../public/images/pngs/logo-istituzionale_cosmetica-italia-no-sfondo.png';
import Colorami from '../../../public/images/pngs/LOGO_EXT_BLACK_2X-1 1.png';
import { useFocus } from '../../hooks/useFocus';
import { useOpenModal } from '../../hooks/useOpenModal';

const GrowSalon = () => {
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

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  const mobileSettings = {
    dots: false,
    autoplay: false,
    infinite:false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.displayMain}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>
              Fai crescere il tuo salone in automatico
            </h1>
            <p className={styles.paragraph}>
              Sappiamo quanto sia complicato per te oggi occuparti di tutti i
              vari aspetti del salone! Per questo ci siamo noi ad aiutarti!
            </p>
            <p className={styles.paragraph}>
              Insieme a te, costruiamo un sistema di azioni marketing
              automatizzate per attrarre clienti nuove, aumentare la frequenza
              delle clienti attuali e recuperare le clienti fuori-frequenza.
            </p>
            <br />
            <button className={styles.button} onClick={buttonClick}>
              richiedi demo GRATUITA
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image priority src={GrowSalonImage} alt="Image" width={550} height={60} />
        </div>
        <br />
        <br />
      </div>
      <div className={styles.grid}>
        <div className={styles.bottomArea}>
          <h2 className={styles.bottomHeading}>Parlano di noi</h2>
        </div>
        <Slider {...(mobile ? mobileSettings : settings)}>
          <div className={styles.imageBox}>
            <Image priority
              src={CorriereDellaSera}
              alt="Image"
              width={230}
              height={60}
            />
          </div>
          <div className={styles.imageBox}>
            <Image priority src={Cosmoprof} alt="Image" width={230} height={60} />
          </div>
          <div className={styles.imageBox}>
            <Image priority
              src={LogoIstituzionaleCosmeticaItaliaNoSfondo}
              alt="Image"
              width={230}
              height={60}
            />
          </div>
          <div className={styles.imageBox}>
            <Image priority src={Colorami} alt="Image" width={230} height={60} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default GrowSalon;
