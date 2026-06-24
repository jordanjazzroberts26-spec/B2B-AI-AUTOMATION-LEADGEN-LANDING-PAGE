import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8', '-translate-x-8', 'translate-x-8', 'scale-95');
            entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return sectionRef;
}
