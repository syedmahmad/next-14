import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

interface ExFormLabelProps {
  label?: string;
}

const ExFormLabel: FC<ExFormLabelProps> = ({ label }: ExFormLabelProps) => (
  <Typography>{`${label ?? ''}`}</Typography>
);

export default ExFormLabel;
