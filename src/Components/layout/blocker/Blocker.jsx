import { useEffect } from "react";
import CartMenu from "./cart_menu/CartMenu";
import Search from "./search/Search";

// State
import { useSelector } from "react-redux";
import { blockerSetter } from "../../redux/slices/BlockerSlice";
import { useDispatch } from "react-redux";

const Blocker = () => {
  const blockerState = useSelector((state) => state.blocker.currentBlock);
  const dispatch = useDispatch();
  useEffect(() => {
    if (blockerState !== null) {
      document.body.classList.add("block-scroll");
    } else {
      document.body.classList.remove("block-scroll");
    }
  }, [blockerState]);

  return (
    <div
      onClick={() => dispatch(blockerSetter(null))}
      className={`blocker ${blockerState !== null ? "show-blocker" : ""}`}
    >
      {blockerState === "cart" ? (
        <CartMenu />
      ) : blockerState === "search" ? (
        <Search />
      ) : (
        ""
      )}
    </div>
  );
};

export default Blocker;
