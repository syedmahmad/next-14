import React, { FunctionComponent, ReactNode } from 'react';
import './FormContainer.scss';
import { Link } from 'react-router-dom';
import FormBanner from '../FormBanner/FormBanner';
import { CircularProgress } from '@mui/material';

interface FormContainerProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonPath?: string;
  ctaLabel?: string;
  ctaAction?: string;
  badged?: boolean;
  ctaPath?: string;
  ctaText?: string;
  children?: ReactNode;
  imageUrl?: string;
  alertTitle?: string;
  alertText?: string;
  // eslint-disable-next-line
  onButtonTapped: any;
  isFormValid: boolean;
  isLoading: boolean;
  showToast: boolean;
  // eslint-disable-next-line
  onCtaClicked?: () => any;
  // eslint-disable-next-line
  handleSubmitHookForm: any;
}

const FormContainer: FunctionComponent<FormContainerProps> = ({
  title,
  subtitle,
  buttonLabel,
  ctaLabel,
  badged = false,
  buttonPath,
  ctaPath,
  children,
  ctaText,
  onButtonTapped,
  imageUrl = 'http://placehold.it/150x150',
  alertTitle,
  alertText,
  isFormValid,
  isLoading = false,
  showToast = false,
  onCtaClicked,
  handleSubmitHookForm,
}: FormContainerProps) => {
  // eslint-disable-next-line
  const handleFormSubmit = (data: any) => {
    onButtonTapped(data); // Chiama la funzione passata come prop
  };

  if (isLoading) return <CircularProgress color="success" />;

  return (
    <>
      <form onSubmit={handleSubmitHookForm(handleFormSubmit)}>
        <div className="form__wrapper">
          {badged && (
            <div
              className="badge"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'cover',
              }}
            ></div>
          )}
          {title && <div className="form__title">{title}</div>}
          {subtitle && <div className="form__subtitle">{subtitle}</div>}
          {alertTitle !== null && alertText !== null && showToast === true && (
            <FormBanner title={alertTitle} subtitle={alertText} />
          )}
          {children}

          <input
            disabled={!isFormValid}
            className={!isFormValid ? 'form__button__disabled' : 'form__button'}
            type="submit"
            value={buttonLabel}
            aria-label={buttonLabel}
          ></input>

          {ctaLabel && ctaPath && (
            <Link to={ctaPath!}>
              <div className="form__cta"> {ctaLabel}</div>
            </Link>
          )}

          {ctaLabel && !ctaPath && (
            <div
              style={{
                marginTop: '28px',
              }}
            >
              <Link to={buttonPath!} style={{ textDecoration: 'none' }}>
                <span className="form__actionLabel">{ctaLabel}</span>
              </Link>

              <span
                onClick={() => {
                  if (onCtaClicked) {
                    onCtaClicked();
                  }
                }}
                className="form__cta"
                style={{ marginTop: '50px', marginLeft: '5px' }}
              >
                {ctaText}
              </span>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default FormContainer;
