'use client';

import { useEffect, useRef } from 'react';
import styles from './ParticlesBackground.module.css';

interface ParticlesConfig {
  particleCount?: number;
  particleColors?: string[];
  speed?: number;
  opacity?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const defaultConfig: ParticlesConfig = {
  particleCount: 10,
  particleColors: ['#0088FF', '#00D4FF', '#0066CC', '#00B8D4'],
  speed: 1,
  opacity: 0.5,
};

export default function ParticlesBackground(config: ParticlesConfig = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  const mergedConfig = { ...defaultConfig, ...config };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with random velocities
    const initializeParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < mergedConfig.particleCount!; i++) {
        const colors = mergedConfig.particleColors!;
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * mergedConfig.speed! * 2,
          vy: (Math.random() - 0.5) * mergedConfig.speed! * 2,
          radius: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initializeParticles();

    // Animation loop - Kinetic movement, no connections
    const animate = () => {
      // Clear canvas with transparency for trail effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls with slight friction
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));
        }
        
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));
        }

        // Add slight random drift for more organic movement
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;

        // Limit max speed
        const maxSpeed = mergedConfig.speed! * 2;
        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = mergedConfig.opacity!;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mergedConfig]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}