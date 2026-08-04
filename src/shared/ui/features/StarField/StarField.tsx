import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
}

const STAR_DENSITY = 6121; // px² per star
const MAX_STARS = 108;

function createStars(width: number, height: number): Star[] {
  const count = Math.min(MAX_STARS, Math.floor((width * height) / STAR_DENSITY));

  return Array.from({ length: count }, () => {
    const radius = 0.5 + Math.random() * 1.5;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius,
      speed: radius * 8, // bigger stars drift faster (parallax feel)
      opacity: 0.3 + Math.random() * 0.7,
    };
  });
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let stars: Star[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = createStars(width, height);
    };
    resize();
    window.addEventListener('resize', resize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228, 228, 231, ${star.opacity})`;
        ctx.fill();
      }
    };

    if (prefersReducedMotion) {
      draw();
      return () => window.removeEventListener('resize', resize);
    }

    let frameId = 0;
    let lastTime = performance.now();
    const tick = (time: number) => {
      const deltaSeconds = (time - lastTime) / 1000;
      lastTime = time;

      for (const star of stars) {
        star.x += star.speed * deltaSeconds;
        if (star.x - star.radius > width) {
          star.x = -star.radius;
          star.y = Math.random() * height;
        }
      }
      draw();
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="star-field" aria-hidden />;
}
