'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './OurCustomer.module.css';
import Aveda from '../../../public/images/svgs/aveda';
import JeanLouisDavid from '../../../public/images/svgs/jean-louis-david';
import Alfaparf from '../../../public/images/svgs/alfaparf';
import Medavita from '../../../public/images/svgs/medavita';
import LaBiosthetic from '../../../public/images/svgs/la-biosthetic';
import PaulMitchell from '../../../public/images/svgs/paul-mitchell-logo';
import Provost from '../../../public/images/svgs/provost';

const customers = [
  {
    heading: '+10.000',
    subHeading: 'saloni',
    description: 'Ci scelgono ogni giorno',
  },
  {
    heading: '1,5 Milioni',
    subHeading: 'prenotazioni',
    description:
      'Create e gestite ogni mese in salone oppure online grazie alla nostra agenda digitale',
  },
  {
    heading: '+15.000',
    subHeading: 'ore di assistenza',
    description:
      'Formazione e assistenza erogate dal nostro customer care a favore dei saloni',
  },
];

const OurCustomer = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    speed: 8000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainHeading}>I nostri numeri</h2>
      <div className={styles.displayMain}>
        {customers.map((customer) => (
          <div className={styles.box} key={customer.heading}>
            <h1 className={styles.heading}>{customer.heading}</h1>
            <h3 className={styles.subHeading}>{customer.subHeading}</h3>
            <h4 className={styles.description}>{customer.description}</h4>
          </div>
        ))}
      </div>
      <div className={styles.bottomArea}>
        <h2 className={styles.bottomHeading}>
          UNISCITI AI +10.000 SALONI CHE HANNO SCELTO DI CAMBIARE A EXAGON SALON
        </h2>
      </div>
      <Slider {...settings}>
        <div className={styles.imageBox}>
          <Aveda />
        </div>
        <div className={styles.imageBox}>
          <JeanLouisDavid />
        </div>
        <div className={styles.imageBox}>
          <Alfaparf />
        </div>
        <div className={styles.imageBox}>
          <Medavita />
        </div>
        <div className={styles.imageBox}>
          <LaBiosthetic />
        </div>
        <div className={styles.imageBox}>
          <PaulMitchell />
        </div>
        <div className={styles.imageBox}>
          <Provost />
        </div>
      </Slider>
    </div>
  );
};

export default OurCustomer;
