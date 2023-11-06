import React from 'react';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';

import ExFormLabel from '../ExFormLabel/ExFormLabel';

interface ExSwitchProps {
  isEnabled: boolean;
  switchType: 'primary' | 'secondary';
  labelPlacement: 'start' | 'end';
  label?: string;
  // eslint-disable-next-line
  field?: any;
}

const ExSwitch = styled((props: ExSwitchProps) => {
  return (
    <FormControlLabel
      sx={{
        margin: 0,
      }}
      value="start"
      control={
        <Switch
          focusVisibleClassName=".Mui-focusVisible"
          disabled={!props.isEnabled}
          disableRipple
          {...props}
          {...props.field}
        />
      }
      label={<ExFormLabel label={props.label}></ExFormLabel>}
      labelPlacement={`${props.labelPlacement}`}
    />
  );
})(({ theme, isEnabled, switchType }) => ({
  width: 68,
  height: 36,
  padding: 0,
  verticalAlign: 'center',
  borderRadius: 40,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(32px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: switchType !== 'primary' ? '#293641' : '#2645E6',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: switchType === 'primary' ? 0.6 : 0.8,
        backgroundColor: switchType !== 'primary' ? '#A0A3BD' : '#2645E6',
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: '#fff',
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: switchType === 'primary' ? 0.3 : 0.5,
      backgroundColor: isEnabled
        ? switchType !== 'primary'
          ? '#A0A3BD'
          : '#2645E6'
        : switchType !== 'primary'
        ? '#ddd'
        : '#A0A3BD',
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: switchType === 'primary' ? '#9699B7' : '#ddd',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default ExSwitch;
