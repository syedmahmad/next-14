'use client';

import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const container = document.getElementById('main');
    container.addEventListener('scroll', controlNavbar);
    // cleanup function
    return () => {
      container.removeEventListener('scroll', controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  const controlNavbar = (event) => {
    if (event.srcElement.scrollTop > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }
    // remember current page location to use in the next move
    setLastScrollY(event.srcElement.scrollTop);
  };

  return show;
};
