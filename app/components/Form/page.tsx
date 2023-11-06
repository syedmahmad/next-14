'use client';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import styles from './Form.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import FormContainer from '../FormComponents/FormContainer/FormContainer';
import FormTextfield from '../FormComponents/FormTextfield/FormTextfield';
import { Controller, useForm } from 'react-hook-form';
import FormValidationPatterns from '../FormComponents/FormValidationPatterns';
import ExSwitch from '../FormComponents/ExSwitch/ExSwitch';
import { FormHelperText } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

type FormInputs = {
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  privacy: number;
};

const Form = () => {
  const { control, handleSubmit, reset } = useForm<FormInputs>();
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState(false);
  const submit = (data: FormInputs) => {
    if (mobile === '') {
      setError(true);
    } else {
      setError(false);
      const formData = new FormData();
      formData.append('first_name', data.first_name);
      formData.append('last_name', data.last_name);
      formData.append('mobile', mobile);
      formData.append('email', data.email);
      formData.append('privacy', `${data.privacy}`);
      if (!data.privacy) {
        toast.warning(`Seleziona la privacy`);
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
            toast.success(`Grazie.`);
            reset();
            setMobile('+39');
            setError(false);
          } else {
            // Handle errors
            toast.error(`Qualcosa è andato storto! Per favore riprova.`);
            reset();
            setMobile('+39');
            setError(false);
          }
        })
        .catch(() => {
          toast.error(`Qualcosa è andato storto! Per favore riprova.`);
          reset();
          setMobile('+39');
          setError(false);
        });
    }
  };

  return (
    <>
      <ToastContainer />
      <FormContainer
        onButtonTapped={submit}
        handleSubmitHookForm={handleSubmit}
        isFormValid={true}
        isLoading={false}
        showToast={false}
        title="Richiedi demo gratuita"
        buttonLabel="invia richiesta"
      >
        <h4 className={styles.subheading}>
          Dai una svolta al tuo salone!
          <br />
          <p className={styles.description}>
            Compila il questionario per prenotare la demo gratuita e senza
            impegno con un nostro consulente.
          </p>
        </h4>
        <br />
        <div className={styles.flex}>
          <div className={styles.flexchild}>
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                validate: FormValidationPatterns.isString,
              }}
              render={({ field, fieldState: { error } }) => (
                <FormTextfield
                  label={'Nome'}
                  formName={'first_name'}
                  type={'text'}
                  field={field}
                  error={error}
                />
              )}
            />
          </div>
          <div className={styles.flexchild}>
            <Controller
              name="last_name"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                validate: FormValidationPatterns.isString,
              }}
              render={({ field, fieldState: { error } }) => (
                <FormTextfield
                  label={'Cognome'}
                  formName={'last_name'}
                  type={'text'}
                  field={field}
                  error={error}
                />
              )}
            />
          </div>
        </div>
        <br />
        <PhoneInput
          containerStyle={{
            marginTop: '5px',
          }}
          country={'it'}
          inputClass={styles.inputField}
          regions={'europe'}
          inputProps={{
            name: 'mobile',
            required: true,
          }}
          value={mobile}
          // eslint-disable-next-line
        onChange={(phone) => setMobile(phone)}
          defaultErrorMessage="Questo campo è obbligatorio"
          isValid={FormValidationPatterns.isNumeric}
        />
        {error && (
          <div style={{ width: '100%' }}>
            <FormHelperText
              style={{
                marginLeft: '14px!important',
                color: 'red',
              }}
            >
              Questo campo è obbligatorio
            </FormHelperText>
          </div>
        )}
        <br />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            validate: FormValidationPatterns.isEmail,
          }}
          render={({ field, fieldState: { error } }) => (
            <FormTextfield
              label={'Indirizzo email'}
              formName={'email'}
              type={'text'}
              field={field}
              error={error}
            />
          )}
        />
        <br />
        <div className={styles.flex}>
          <div className={styles.switchContainer}>
            <Controller
              name="privacy"
              control={control}
              render={({ field }) => (
                <ExSwitch
                  isEnabled={true}
                  switchType={'primary'}
                  labelPlacement={'start'}
                  field={field}
                />
              )}
            />
          </div>
          <p className={styles.paragraph}>
            Lorem ipsum docet lorem ipsim docet lorem lorem docet lorem ipsim
          </p>
        </div>
      </FormContainer>
    </>
  );
};

export default Form;
