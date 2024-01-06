import { useEffect } from 'react';

const DisableScroll = () => {
  //prueba test deploy
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return null;
};

export default DisableScroll;
