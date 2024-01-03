import MobileMenu from "./Components/mobile_menu/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import BurgerIcon from "./Components/Burger/BurgerIcon";
import { useEffect, useState } from "react";
import { navLinks, navIcons } from "../../../Data/navbar/navbar";
import useScroll from "../../hooks/useScroll";
import LangMenu from "./Components/lang_menu/LangMenu";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isTarget] = useScroll(99);
  const location = useLocation().pathname;
  const [delayPassed, setDelayPassed] = useState(false);
  useEffect(() => {
    if (isTarget) {
      const navTimer = setTimeout(() => {
        setDelayPassed(true);
      }, 500);
      return () => clearTimeout(navTimer);
    } else {
      setDelayPassed(false);
    }
  }, [isTarget]);
  return (
    <nav className={`${isTarget ? "sticky-nav" : ""} `}>
      <div
        className={`container flex items-center m-auto py-2  z-20 ${
          delayPassed ? "py-[22px]" : ""
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
          {navIcons.map((icon, index) => (
            <li
              className={`large-paragrapgh font-primary ${
                icon.isRelative ? "relative" : ""
              } ${icon.iconType === "language" ? "lang" : ""}`}
              key={index}
            >
              {icon.iconType === "language" ? <LangMenu /> : ""}
              {icon.route !== null ? (
                <Link to={icon.route}>
                  {<icon.icon className="nav-icon" />}
                </Link>
              ) : (
                <icon.icon className="nav-icon" />
              )}

              {icon.iconType === "shop" ? (
                <div className="cart-badge">
                  <span>0</span>
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpened={isOpened} menuSetter={setIsOpened} />
    </nav>
  );
};

export default Navbar;
