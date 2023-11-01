'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './AlreadyChosen.module.css';
import Aveda from '../../../public/images/svgs/aveda';
import JeanLouisDavid from '../../../public/images/svgs/jean-louis-david';
import TrustPilot from '../../../public/images/svgs/trustPilot';
import InvertedCommas from '../../../public/images/svgs/invertedCommas';
import Stars from '../../../public/images/svgs/stars';
import ArrowLeft from '../../../public/images/svgs/arrow-left';
import ArrowRight from '../../../public/images/svgs/arrowRight';

const customers = [
  {
    icon: <TrustPilot />,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
  },
  {
    icon: <JeanLouisDavid />,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
  },
  {
    icon: <Aveda />,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
  },
  {
    icon: <JeanLouisDavid />,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
  },
];

const AlreadyChosen = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainHeading}>Ascolta chi ci ha già scelto</h2>
      <h2 className={styles.mainHeading}>
        <TrustPilot />
      </h2>
      <div className={styles.displayMain}>
        <Slider {...settings}>
          {customers.map((customer) => (
            <div className={styles.itemContainer} key={customer.description}>
              <InvertedCommas />
              <p className={styles.paragraph}>{customer.description}</p>
              <div className={styles.iconContainer}>{customer.icon}</div>
              <p className={styles.nameParagraph}>Nome Cognome</p>
              <Stars />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AlreadyChosen;
