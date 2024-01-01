import { SlMagnifier } from "react-icons/sl";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import MobileMenu from "./Components/MobileMenu";
import { Link } from "react-router-dom";
import BurgerIcon from "./Components/Burger/BurgerIcon";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 100) {
      setIsPassed(true);
    } else {
      setIsPassed(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);
  return (
    <nav>
      <div
        className={`container flex items-center m-auto py-2  z-20 ${
          isPassed ? "sticky-nav" : ""
        } `}
      >
        {/* Pages */}
        <ul className="hidden xl:flex gap-[15px] menu-large">
          <li className="large-paragrapgh font-primary">
            <Link to="/">Home</Link>
          </li>
          <li className="large-paragrapgh font-primary">
            <Link to="/Products">Products</Link>
          </li>
          <li className="large-paragrapgh font-primary">
            <Link to="/About-Us">About Us</Link>
          </li>
          <li className="large-paragrapgh font-primary">
            <Link to="/Service">Service</Link>
          </li>
          <li className="large-paragrapgh font-primary">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Burger */}
        <BurgerIcon burgerSetter={setIsOpened} isOpened={isOpened} />
        {/* Nav Icons */}
        <ul className="flex  ml-auto gap-[15px] md:gap-[25px] ">
          <li className="large-paragrapgh font-primary">
            <SlMagnifier className="nav-icon" />
          </li>

          <li className="large-paragrapgh font-primary">
            <Link to="/Wishlist">
              <IoMdHeartEmpty className="nav-icon" />
            </Link>
          </li>
          <li className="large-paragrapgh font-primary relative">
            <Link to="/Cart">
              <TbShoppingBagPlus className="nav-icon" />
            </Link>
            <div className="cart-badge">
              <span>0</span>
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
