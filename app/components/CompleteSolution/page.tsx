'use client';
import React, { useEffect, useState } from 'react';
import styles from './CompleteSolution.module.css';
import Icon1 from '../../../public/images/svgs/icon1';
import Icon2 from '../../../public/images/svgs/icon2';
import Icon3 from '../../../public/images/svgs/icon3';
import Icon4 from '../../../public/images/svgs/icon4';
import Icon5 from '../../../public/images/svgs/icon5';
import Icon6 from '../../../public/images/svgs/icon6';
import Icon7 from '../../../public/images/svgs/icon7';
import Icon8 from '../../../public/images/svgs/icon8';
import Icon9 from '../../../public/images/svgs/icon9';
import { useFocus } from '../../hooks/useFocus';
import { useOpenModal } from '../../hooks/useOpenModal';

const solutions = [
  {
    icon: <Icon1 />,
    heading: 'Prenotazione gratuita',
    description:
      'Le tue clienti possono prenotare gratuitamente da ogni dispositivo ed in qualsiasi momento con un semplicl click.',
  },
  {
    icon: <Icon2 />,
    heading: 'Notifiche automatizzate',
    description:
      'Le tue clienti ricevono le notifiche dell’appuntamento via Whatsapp o SMS sia al momento della prenotazione sia il giorno prima! In questo modo non avrai più disdette all’ultimo momento!',
  },
  {
    icon: <Icon3 />,
    heading: 'Social network al top!',
    description:
      'Ci integriamo con i tuoi social media per attrarre nuove clienti e spingere le prenotazioni online attraverso Google, Facebook, Instagram ed il tuo sito.',
  },
  {
    icon: <Icon4 />,
    heading: 'Gestione delle recensioni',
    description:
      'Crea la tua reputazione online a cinque stelle per costruire un brand forte per il tuo salone e attrarre clienti nuove',
  },
  {
    icon: <Icon5 />,
    heading: 'Marketing automatizzato',
    description:
      'Ci prendiamo cura del marketing del tuo salone automatizzando le iniziative ed le promozioni per attrarre clienti nuove ed aumentare la frequenza delle clienti attuali',
  },
  {
    icon: <Icon6 />,
    heading: 'Gestione magazzino e spese',
    description:
      'Grazie alla nostra intelligenza artificiale, non serve impiegare ore e ore per ordinare i prodotti. Inoltre puoi tenere sempre al minimo le scorte evitando gli sprechi inutili.',
  },
  {
    icon: <Icon7 />,
    heading: 'Cassa',
    description:
      'Con pochi semplici passi, puoi gestire qualsiasi modalità di pagamento dei tuoi clienti. Puoi gestire anche abbonamenti e gift card',
  },
  {
    icon: <Icon8 />,
    heading: 'Obiettivi e kpi',
    description:
      'Non occorrono troppi numeri per capire come sta andando il salone e su quali aree intervenire! Usa la nostra dashboard e analizza i numeri chiave del tuo salone',
  },
  {
    icon: <Icon9 />,
    heading: 'Controllo spese',
    description:
      'Sappiamo quanto è importante fare quadrare i conti del tuo salone. Per questo abbiamo creato un sistema semplice per monitorare le spese costantemente.',
  },
];

const CompleteSolution = () => {
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

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.mainHeading}>
          La soluzione completa per gestire il tuo salone a 360 gradi
        </h2>
      </div>
      <div className={styles.gridContainer}>
        {solutions.map((solution) => (
          <div className={styles.gridItem} key={solution.heading}>
            <div className={styles.gridItemChild}>{solution.icon}</div>
            <h4 className={styles.heading}>{solution.heading}</h4>
            <h5 className={styles.description}>{solution.description}</h5>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={buttonClick}>
          richiedi demo GRATUITA
        </button>
      </div>
    </div>
  );
};

export default CompleteSolution;
