import { SlMagnifier } from "react-icons/sl";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex items-center m-auto px-1 py-2">
        <ul className="flex gap-[25px]">
          <li className="large-paragrapgh font-primary">Home</li>
          <li className="large-paragrapgh font-primary">Products</li>
          <li className="large-paragrapgh font-primary">About Us</li>
          <li className="large-paragrapgh font-primary">Services</li>
          <li className="large-paragrapgh font-primary">Contact</li>
        </ul>
        <ul className="flex ml-auto gap-[25px]">
          <li className="large-paragrapgh font-primary">
            <SlMagnifier />
          </li>
          <li className="large-paragrapgh font-primary">
            <TbShoppingBagPlus />
          </li>
          <li className="large-paragrapgh font-primary">
            <IoMdHeartEmpty />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
