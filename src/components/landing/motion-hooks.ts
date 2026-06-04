'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Stable server + first client paint; reads prefers-reduced-motion after mount. */
export function useMotionHydration() {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    mounted,
    reduce: mounted && prefersReduced,
  };
}
