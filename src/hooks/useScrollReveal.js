import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — triggers a callback once when the element
 * enters the viewport. Returns a ref to attach to the target element.
 *
 * @param {Function} onEnter   – called with the entry when element enters
 * @param {Object}   options   – IntersectionObserver options
 */
export function useScrollReveal(onEnter, options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter(entry);
          observer.unobserve(el); // fire once
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onEnter, options]);

  return ref;
}

export default useScrollReveal;
