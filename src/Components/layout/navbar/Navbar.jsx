import { SlMagnifier } from "react-icons/sl";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import MobileMenu from "./Components/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import BurgerIcon from "./Components/Burger/BurgerIcon";
import { useState } from "react";
import { navLinks } from "../../../Data/navbar/navbar";
import useScroll from "../../hooks/useScroll";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isTarget] = useScroll(99);
  const location = useLocation().pathname;

  return (
    <nav>
      <div
        className={`container flex items-center m-auto py-2  z-20 ${
          isTarget ? "sticky-nav" : ""
        } `}
      >
        {/* Pages */}
        <ul className="hidden xl:flex gap-[15px] menu-large">
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
