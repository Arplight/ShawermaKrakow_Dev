import { BsFillCartXFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { blockerSetter } from "../../../redux/slices/BlockerSlice";

const EmptyCart = () => {
  const dispatchBlocker = useDispatch();
  return (
    <div className="flex flex-col gap-2 items-center text-center">
      <BsFillCartXFill className="text-[100px] fill-[#12342f]" />
      <h2 className="font-primary">Your Cart is Empty</h2>
      <Link
        to="/Products"
        className="link-btn main-button font-secondary"
        onClick={() => dispatchBlocker(blockerSetter(null))}
      >
        Start shopping
        <IoIosArrowForward className="text-[20px] button-arrow" />
      </Link>
    </div>
  );
};

export default EmptyCart;
