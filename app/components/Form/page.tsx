'use client';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Form.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const initalState = {
  first_name: '',
  last_name: '',
  mobile: '',
  email: '',
  privacy: 0,
};

const Form = () => {
  const [state, setState] = useState(initalState);

  return (
    <form
      id="form-container"
      className={styles.formContainer}
      onSubmit={(event) => {
        event.preventDefault(); // Prevent the default form submission
        // Get the form data
        const formData = new FormData();

        formData.append('first_name', state.first_name);
        formData.append('last_name', state.last_name);
        formData.append('mobile', state.mobile);
        formData.append('email', state.email);
        formData.append('privacy', `${state.privacy}`);
        if (state.privacy === 0) {
          toast.warning(`Privacy value must be 1`);
          return;
        }
        // Specify the URL you want to POST to
        const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/requestdemo`;

        fetch(url, {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              // Handle the successful response here
              toast.success(`Thenk you`);
              setState(initalState);
            } else {
              // Handle errors
              toast.error(`Something went wrong! Please try again.`);
              setState(initalState);
            }
          })
          .catch(() => {
            toast.error(`Something went wrong! Please try again.`);
          });
      }}
    >
      <ToastContainer />
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
            id="input-name"
            className={styles.inputField}
            placeholder="Nome"
            type="text"
            required
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
            required
            type="text"
            onChange={(event) =>
              setState({ ...state, last_name: event.target.value })
            }
          />
        </div>
      </div>
      <br />
      <div>
        <PhoneInput
          country={'it'}
          regions={'europe'}
          inputClass={styles.inputField}
          inputProps={{
            required: true,
          }}
          placeholder="Numero di telefono"
          value={state.mobile}
          onChange={(phone) => setState({ ...state, mobile: phone })}
        />
      </div>
      <br />
      <div>
        <input
          className={styles.inputField}
          placeholder="Indirizzo email"
          type="email"
          required
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
              onChange={(event) => {
                if (event.target.checked) {
                  setState({ ...state, privacy: 1 });
                } else {
                  setState({ ...state, privacy: 0 });
                }
              }}
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
