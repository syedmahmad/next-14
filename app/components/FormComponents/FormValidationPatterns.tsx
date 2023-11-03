class FormValidationPatterns {
  static isEmail(email: string): boolean {
    // Pattern di validazione per un indirizzo email
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  }

  static isNumeric(input: string): boolean {
    // Pattern di validazione per numeri (interi o decimali)
    const numericPattern = /^[0-9]+$/;
    return numericPattern.test(input);
  }

  static isString(input: string): boolean {
    const stringPattern = /^[A-Za-z]+$/;
    return stringPattern.test(input);
  }
}

export default FormValidationPatterns;
