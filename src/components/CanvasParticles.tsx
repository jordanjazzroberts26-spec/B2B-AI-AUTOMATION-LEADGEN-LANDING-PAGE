import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  fadeSpeed: number;
}

export function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let isVisible = true;

    // Handle high DPI displays
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Intersection Observer to pause animation when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Create a new particle
    const createParticle = (initBottom = false): Particle => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: Math.random() * rect.width,
        y: initBottom ? rect.height + 10 : Math.random() * rect.height,
        size: Math.random() * 1.5 + 0.5, // 0.5px to 2px
        speedY: -(Math.random() * 0.25 + 0.08), // Slow upward drift
        speedX: (Math.random() - 0.5) * 0.1, // Very subtle side-to-side sway
        opacity: initBottom ? 0 : Math.random() * 0.5,
        maxOpacity: Math.random() * 0.35 + 0.1, // Max 10% to 45% opacity
        fadeSpeed: Math.random() * 0.005 + 0.002,
      };
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = 45;
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(false));
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      particles.forEach((p, index) => {
        // Update physics
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.005) * 0.05; // Gentle wave sway

        // Fade in/out logic
        if (p.y < 0) {
          // Reset to bottom if drifted off top
          particles[index] = createParticle(true);
        } else {
          if (p.opacity < p.maxOpacity) {
            p.opacity += p.fadeSpeed;
          }
          // Fade out near the top
          if (p.y < rect.height * 0.2) {
            p.opacity -= p.fadeSpeed * 1.5;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${Math.max(0, p.opacity)})`; // Lavender/Indigo glow
        ctx.shadowColor = 'rgba(108, 99, 255, 0.4)';
        ctx.shadowBlur = p.size * 2;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
