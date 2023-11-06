const errorMessageHelper: { [index: string]: unknown } = {
  email: {
    required: 'La mail è richiesta',
    validate: "L'indirizzo mail non è valido",
  },
  first_name: {
    required: 'Il nome è obbligatorio',
    validate: 'Il nome non è valido',
  },
  last_name: {
    required: 'Il cognome è obbligatorio',
    validate: 'Il cognome non è valido',
  },
  mobile: {
    required: 'è richiesto il numero di cellulare',
    validate: 'numero di cellulare non è valido',
  },
  privacy: {
    required: 'Devi controllare questa icona',
  },
};

export default errorMessageHelper;
