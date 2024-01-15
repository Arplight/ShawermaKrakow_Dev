import MobileMenu from "./Components/mobile_menu/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import BurgerIcon from "./Components/Burger/BurgerIcon";
import { useRef, useState } from "react";
import { navLinks } from "../../../Data/navbar/navbar";
import LangMenu from "./Components/lang_menu/LangMenu";
// state
import { useDispatch, useSelector } from "react-redux";
import useDistance from "../../hooks/useDistance";
import { blockerSetter } from "../../redux/slices/BlockerSlice";
// icons
import { SlMagnifier } from "react-icons/sl";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const navRef = useRef(null);
  const { isDistance } = useDistance(navRef);
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <nav className={`${isDistance ? "sticky-nav" : ""} `} ref={navRef}>
      <div
        className={`container flex items-center m-auto py-2  z-20 ${
          isDistance ? "py-[22px]" : ""
        }`}
      >
        {/* Pages */}
        <ul className="hidden xl:flex gap-[15px] menu-large nav-large">
          {navLinks.map((link, index) => (
            <li
              className={`large-paragrapgh font-primary  ${
                link.route === location ? "nav-active" : ""
              }`}
              key={index}
            >
              <Link to={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Burger */}
        <BurgerIcon burgerSetter={setIsOpened} isOpened={isOpened} />

        {/* Nav Icons */}
        <ul className="flex  ml-auto gap-[15px] md:gap-[25px] nav-large">
          <li
            className="large-paragrapgh font-primary "
            onClick={() => dispatch(blockerSetter("search"))}
          >
            <SlMagnifier className="nav-icon" />
          </li>
          <li className="large-paragrapgh font-primary relative lang">
            <IoLanguage className="nav-icon" />
            <LangMenu />
          </li>
          <li className="large-paragrapgh font-primary ">
            <Link to="/Wishlist">
              <IoMdHeartEmpty className="nav-icon" />
            </Link>
          </li>
          <li
            className="large-paragrapgh font-primary relative"
            onClick={() => dispatch(blockerSetter("cart"))}
          >
            <TbShoppingBagPlus className="nav-icon" />
            <div className="cart-badge">
              <span>{cartItems.length}</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpened={isOpened} menuSetter={setIsOpened} />
    </nav>
  );
};

export default Navbar;
