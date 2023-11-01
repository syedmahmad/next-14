'use client';
import React from 'react';
import styles from './Form.module.css';

const Form = () => {
  return (
    <form className={styles.formContainer}>
      <h1 className={styles.heading}>Richiedi demo gratuita</h1>
      <h4 className={styles.subheading}>
        Dai una svolta al tuo salone!
        <br />
        <p className={styles.description}>
          Compila il questionario per prenotare la demo gratuita (e senza
          impegno!) con un nostro consulente.
        </p>
      </h4>
      <div className={styles.flex}>
        <div className={styles.flexchild}>
          <input className={styles.inputField} placeholder="Nome" />
        </div>
        <div className={styles.flexchild}>
          <input className={styles.inputField} placeholder="Cognome" />
        </div>
      </div>
      <br />
      <div>
        <input className={styles.inputField} placeholder="Numero di telefono" />
      </div>
      <br />
      <div>
        <input className={styles.inputField} placeholder="Indirizzo email" />
      </div>
      <br />
      <div className={styles.flex}>
        <div className={styles.switchContainer}>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
        <p className={styles.paragraph}>
          Lorem ipsum docet lorem ipsim docet lorem lorem docet lorem ipsim
        </p>
      </div>
      <br />
      <button className={styles.button}>invia richiesta</button>
    </form>
  );
};

export default Form;
