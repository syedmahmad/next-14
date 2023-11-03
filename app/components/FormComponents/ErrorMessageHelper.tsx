// eslint-disable-next-line
const errorMessageHelper: { [index: string]: any } = {
  email: {
    required: 'La mail è richiesta',
    validate: "L'indirizzo mail non è valido",
  },
  first_name: {
    required: 'Il nome non è obbligatorio',
    validate: 'Il nome non è valido',
  },
  last_name: {
    required: 'Il cognome non è obbligatorio',
    validate: 'Il cognome non è valido',
  },
  mobile: {
    required: 'è richiesto il numero di cellulare',
    validate: 'il numero di cellulare non è valido',
  },
  password: {
    required: 'La password è richiesta',
  },
  privacy: {
    required: 'Devi controllare questa icona',
  },
  code: {
    required: 'Il codice di conferma è richiesto',
  },
  pin: {
    required: 'Il pin è richiesto',
  },
};

export default errorMessageHelper;
