import React, { FC } from 'react';
import { FormHelperText } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import errorMessageHelper from '../ErrorMessageHelper';

interface FormTextfieldProps {
  label: string;
  formName: string;
  // eslint-disable-next-line
  field?: any;
  // eslint-disable-next-line
  error?: any;
  errorText?: string;
  type: 'text' | 'password';
  // eslint-disable-next-line
  onKeyDown?: any;
  multiline?: boolean;
}

const FormTextfield: FC<FormTextfieldProps> = ({
  label,
  formName,
  field,
  type,
  error,
  onKeyDown,
  multiline,
}: FormTextfieldProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <FormControl fullWidth={true} variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          sx={{
            fontFamily: 'Poppins',
            '&.Mui-Focused': {
              color: 'red',
            },
            '&.MuiInputLabel-shrink': {
              color: error && 'red',
            },
          }}
        >
          {label}
        </InputLabel>

        <OutlinedInput
          id="outlined-adornment-password"
          label={label}
          error={error !== undefined}
          fullWidth={true}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : 'text'
          }
          {...field}
          multiline={multiline ?? false}
          maxRows={6}
          sx={{
            fontFamily: 'Poppins',
            borderColor: '#2645E6',
            '.Mui-focused': {
              color: '#2645E6',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#2645E6',
              },
            },
          }}
          onKeyPress={onKeyDown}
          endAdornment={
            type === 'password' ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : null
          }
        />
        {!!error && (
          <FormHelperText
            style={{
              marginLeft: '14px!important',
              color: 'red',
            }}
          >
            {errorMessageHelper[formName][error.type]}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};

export default FormTextfield;
