import { useEffect } from 'react';

interface ConfettiParticle {
  x: number;
  y: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

const COLORS = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff69b4'];

export function useConfetti(duration: number = 3000) {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: ConfettiParticle[] = [];
    const particleCount = 150;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5,
        size: Math.random() * 8 + 5,
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 3 + 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: 1,
      });
    }

    const startTime = Date.now();
    let animationFrameId: number;

    function animate() {
      if (!ctx) return;

      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        // Fade out in the last 20% of duration
        if (progress > 0.8) {
          particle.opacity = 1 - ((progress - 0.8) / 0.2);
        }

        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        ctx.restore();
      });

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        document.body.removeChild(canvas);
      }
    }

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    };
  }, [duration]);
}