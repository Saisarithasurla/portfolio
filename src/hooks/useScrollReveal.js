import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if element is already within viewport on initial mount
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      // Toggle visibility dynamically as user scrolls into and out of view
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: options.threshold !== undefined ? options.threshold : 0.08,
      rootMargin: options.rootMargin || '0px 0px -40px 0px'
    });

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible, setIsVisible];
}
