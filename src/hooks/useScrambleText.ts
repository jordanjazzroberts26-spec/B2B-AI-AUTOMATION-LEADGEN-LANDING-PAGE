import { useState, useEffect } from 'react';

const CHARACTERS = '!<>-_\\\\/[]{}—=+*^?#________';

export function useScrambleText(text: string, speed = 30, duration = 1200) {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let iteration = 0;
    const maxIterations = duration / speed;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < (iteration / maxIterations) * text.length) {
              return char;
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
      
      iteration += 1;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, duration]);

  return { displayText, isAnimating };
}
