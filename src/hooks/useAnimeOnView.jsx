import { useRef, useEffect } from "react";
import anime from "animejs";

export const useAnimeOnView = (animeConfig, observerOptions = {}) => {
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          anime(animeConfig);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3, ...observerOptions }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animeConfig, observerOptions]);

  return elementRef;
};
