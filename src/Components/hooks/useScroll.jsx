import { useEffect, useState } from "react";

export default function useScroll(target) {
  const [isTarget, setIsTarget] = useState(false);

  function scroller() {
    if (window.scrollY >= target) {
      setIsTarget(true);
    } else {
      setIsTarget(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scroller);
    return () => removeEventListener("scroll", scroller);
  }, []);

  return [isTarget];
}
