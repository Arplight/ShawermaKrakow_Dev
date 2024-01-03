import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { navLinks } from "../../../../../Data/navbar/navbar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const MobileMenu = ({ isOpened, menuSetter }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation().pathname;
  useEffect(() => {
    if (isOpened) {
      setMenuVisible(true);
    } else {
      const menuTimer = setTimeout(() => setMenuVisible(false), 100);
      return () => clearTimeout(menuTimer);
    }
  }, [isOpened]);
  function menuCollapse() {
    menuSetter(false);
  }
  return (
    <div
      className={`mobile-menu xl:hidden container m-auto ${
        menuVisible ? "visible" : "invisible"
      }`}
    >
      <ul
        className={`flex flex-col gap-[15px] ${
          isOpened ? "mobile-menu-opened" : ""
        }`}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={
              "large-paragrapgh font-primary flex items-center gap-[5px]"
            }
            onClick={() => menuCollapse()}
          >
            {link.route === location && <MdKeyboardDoubleArrowRight />}

            <Link to={link.route}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  isOpened: PropTypes.bool,
  menuSetter: PropTypes.func,
};
