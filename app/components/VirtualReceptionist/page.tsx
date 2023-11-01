import React from 'react';
import styles from './VirtualReceptionist.module.css';
import VirtualReceptionistImage from '../../../public/images/svgs/virtualReceptionistImage';

const VirtualReceptionist = () => {
  return (
    <div className={styles.container}>
      <div className={styles.displayMain}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            Un Receptionist virtuale che lavora per te 24/7
          </h1>
          <p className={styles.paragraph}>
            Mentre tu ed il tuo team lavorate per rendere le donne più belle,
            noi ci occupiamo del tuo salone per renderlo più produttivo e
            organizzato.
          </p>
          <p className={styles.paragraph}>
            Le clienti potranno prenotarsi in modo autonomo sul tuo sito o
            attraverso i social media (google, instagram e facebook). Inoltre le
            clienti riceveranno notifiche automatizzate con Whatsapp o SMS per
            ridurre al minimo le cancellazioni ed i ritardi delle clienti
          </p>
          <br />
          <button className={styles.button}>richiedi demo GRATUITA</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <VirtualReceptionistImage />
      </div>
    </div>
  );
};

export default VirtualReceptionist;
