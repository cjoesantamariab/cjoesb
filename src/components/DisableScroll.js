import { useEffect } from 'react';

const DisableScroll = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return null;
};

export default DisableScroll;
