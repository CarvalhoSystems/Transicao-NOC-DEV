import { useState, useEffect } from "react";

/**
 * Hook customizado para verificar se uma media query CSS corresponde.
 * @param {string} query - A string da media query (ex: "(min-width: 1024px)")
 * @returns {boolean} - Retorna `true` se a query corresponder, `false` caso contrário.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}
