import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to get initial scroll position
    setScrollY(window.scrollY);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
}
