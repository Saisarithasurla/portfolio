import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}
