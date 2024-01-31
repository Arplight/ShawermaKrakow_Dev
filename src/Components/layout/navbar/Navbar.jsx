import MobileMenu from "./Components/mobile_menu/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import BurgerIcon from "./Components/Burger/BurgerIcon";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "../../../Data/navbar/navbar";
import LangMenu from "./Components/lang_menu/LangMenu";
// state
import { useDispatch, useSelector } from "react-redux";
import useDistance from "../../hooks/useDistance";
import { blockerSetter } from "../../redux/slices/BlockerSlice";
// icons
import { SlMagnifier } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { cartTotal } from "../../redux/slices/CartSlice";
import { fetchCart } from "../../redux/store/ApiStore";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const location = useLocation().pathname;
  const navRef = useRef(null);
  const { isDistance } = useDistance(navRef);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalItems = useSelector((state) => state.cart.cartTotalItems);
  const dispatchBlocker = useDispatch();
  const dispatchCart = useDispatch();
  const dispatchTotalItems = useDispatch();
  // CALLING THE CART
  useEffect(() => {
    dispatchCart(fetchCart());
  }, [dispatchCart]);
  useEffect(() => {
    dispatchTotalItems(cartTotal());
  }, [cartItems, dispatchTotalItems]);

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
            onClick={() => dispatchBlocker(blockerSetter("search"))}
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
            onClick={() => dispatchBlocker(blockerSetter("cart"))}
          >
            <BsCart4 className="nav-icon" />
            <div className="cart-badge">
              <span>{cartTotalItems}</span>
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
