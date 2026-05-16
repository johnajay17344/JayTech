'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/ui/scrollindicator.module.css';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.indicator}>
      <div 
        className={styles.progress} 
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
}