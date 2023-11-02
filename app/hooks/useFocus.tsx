'use client';

export const useFocus = () => {
  const handleClick = () => {
    const input = document.getElementById('input-name');
    const container = document.getElementById('form-container');
    container.scrollIntoView({ behavior: 'smooth' });
    input.focus();
  };

  return handleClick;
};
