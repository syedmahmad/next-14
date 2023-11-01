'use client';
import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    privacy: '',
  });

  return (
    <form
      className={styles.formContainer}
      onSubmit={(event) => {
        event.preventDefault(); // Prevent the default form submission
        // Get the form data
        const formData = new FormData({});
        console.log(formData, state);
        // Specify the URL you want to POST to
        const url = 'http://localhost:3002/api/requestdemo';

        fetch(url, {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              // Handle the successful response here
              console.log('POST request was successful!');
            } else {
              // Handle errors
              console.error('POST request failed!');
            }
          })
          .catch((error) => {
            console.error('An error occurred:', error);
          });
      }}
    >
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
          <input
            className={styles.inputField}
            placeholder="Nome"
            type="text"
            value={state.first_name}
            onChange={(event) =>
              setState({ ...state, first_name: event.target.value })
            }
          />
        </div>
        <div className={styles.flexchild}>
          <input
            className={styles.inputField}
            placeholder="Cognome"
            value={state.last_name}
            type="text"
            onChange={(event) =>
              setState({ ...state, last_name: event.target.value })
            }
          />
        </div>
      </div>
      <br />
      <div>
        <input
          className={styles.inputField}
          placeholder="Numero di telefono"
          type="number"
          value={state.mobile}
          onChange={(event) =>
            setState({ ...state, mobile: event.target.value })
          }
        />
      </div>
      <br />
      <div>
        <input
          className={styles.inputField}
          placeholder="Indirizzo email"
          type="email"
          value={state.email}
          onChange={(event) =>
            setState({ ...state, email: event.target.value })
          }
        />
      </div>
      <br />
      <div className={styles.flex}>
        <div className={styles.switchContainer}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              value={state.privacy}
              onChange={(event) =>
                setState({ ...state, privacy: event.target.value })
              }
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
        <p className={styles.paragraph}>
          Lorem ipsum docet lorem ipsim docet lorem lorem docet lorem ipsim
        </p>
      </div>
      <br />
      <button type="submit" className={styles.button}>
        invia richiesta
      </button>
    </form>
  );
};

export default Form;
