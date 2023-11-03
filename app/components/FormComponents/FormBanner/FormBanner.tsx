import React, { FunctionComponent } from 'react';
import './FormBanner.scss';
import { WarningTriangle } from 'iconoir-react';

interface FormBannerProps {
  title?: string;
  subtitle?: string;
}

const FormBanner: FunctionComponent<FormBannerProps> = ({
  title,
  subtitle,
}: FormBannerProps) => {
  return (
    <div className="error_badge">
      <div>
        <WarningTriangle />
      </div>
      <div className="error_message_wrapper">
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default FormBanner;
