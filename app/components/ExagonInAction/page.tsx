import React from 'react';
import styles from './ExagonInAction.module.css';
import ExagonInActionImage from '../../../public/images/svgs/ExagonInActionImage';

const ExagonInAction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainHeading}>Vuoi vedere Exagon in azione?</h2>
      <div className={styles.centerBox}>
        <p className={styles.paragraph}>
          Dai una svolta al tuo salone! Compila il questionario per prenotare la
          demo gratuita e senza impegno con un nostro consulente.
        </p>
      </div>
      <br />
      <br />
      <div className={styles.centerBox}>
        <button className={styles.demoButton}>richiedi demo GRATUITA</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.centerBox}>
        <ExagonInActionImage />
      </div>
    </div>
  );
};

export default ExagonInAction;
