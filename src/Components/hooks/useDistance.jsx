import { useEffect, useState } from "react";

export default function useDistance(ref) {
  const [isDistance, setIsDistance] = useState(null);
  useEffect(() => {
    function getDistance() {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        setIsDistance(top <= 0);
      }
    }
    window.addEventListener("scroll", getDistance);
    return () => window.removeEventListener("scroll", getDistance);
  }, [ref]);

  return { isDistance };
}
