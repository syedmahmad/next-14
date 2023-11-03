import { createTheme } from '@mui/material';

export let theme = createTheme({
  palette: {
    primary: {
      main: '#2645e6',
    },
    secondary: {
      main: '#293641',
    },
  },
});
theme = createTheme(theme, {
  components: {
    MuiSlider: {
      styleOverrides: {
        mark: {
          color: 'white',
          padding: '12px',
          marginLeft: '-8px',
          borderRadius: '100%',
          backgroundColor: '#D9DBE9',
          opacity: '1',
          '&::after': {
            content: '""',
            width: '2px',
            height: '37%',
            background: theme.palette.primary.main,
            display: 'block',
            position: 'absolute',
            top: '8px',
            right: '11px',
            borderRadius: '10px',
          },
        },
        markActive: {
          padding: '12px',
          marginLeft: '-8px',
          borderRadius: '100%',
          backgroundColor: theme.palette.primary.main,
          opacity: '1',
          '&::after': {
            content: '""',
            width: '2px',
            height: '37%',
            background: '#fff',
            display: 'block',
            position: 'absolute',
            top: '8px',
            right: '11px',
            borderRadius: '10px',
          },
        },

        thumb: {
          height: '30px',
          width: '30px',
          color: 'white',
          border: `2px solid ${theme.palette.primary.main}`,
          '&::after': {
            content: '""',
            width: '2px',
            height: '44%',
            background: theme.palette.primary.main,
            display: 'block',
            position: 'absolute',
            top: '13px',
            borderRadius: '10px',
          },
        },

        track: {
          height: '12px',
          color: theme.palette.primary.main,
        },
        rail: {
          height: '12px',
          color: '#D9DBE9',
          opacity: '1',
        },
      },
    },
  },
});
