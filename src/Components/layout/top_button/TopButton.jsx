import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

const TopButton = () => {
  const [isTarget, setIsTarget] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 500) {
      setIsTarget(true);
    } else {
      setIsTarget(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => removeEventListener("scroll", scrollHandler);
  }, []);
  function elevator() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      className={`top-button ${isTarget ? "show-btn" : ""}`}
      onClick={elevator}
    >
      <IoIosArrowUp />
    </button>
  );
};

export default TopButton;
