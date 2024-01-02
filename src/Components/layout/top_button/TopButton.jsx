import { IoIosArrowUp } from "react-icons/io";
import useScroll from "../../hooks/useScroll";

const TopButton = () => {
  const [isTarget] = useScroll(500);

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
