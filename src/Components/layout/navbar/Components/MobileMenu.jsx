import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const MobileMenu = ({ isOpened, menuSetter }) => {
  const [menuVisible, setMenuVisible] = useState(false);

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
        <li
          className="large-paragrapgh font-primary"
          onClick={() => menuCollapse()}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="large-paragrapgh font-primary"
          onClick={() => menuCollapse()}
        >
          <Link to="/Products">Products</Link>
        </li>
        <li
          className="large-paragrapgh font-primary"
          onClick={() => menuCollapse()}
        >
          <Link to="/About-Us">About Us</Link>
        </li>
        <li
          className="large-paragrapgh font-primary"
          onClick={() => menuCollapse()}
        >
          <Link to="/Service">Service</Link>
        </li>
        <li
          className="large-paragrapgh font-primary"
          onClick={() => menuCollapse()}
        >
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  isOpened: PropTypes.bool,
  menuSetter: PropTypes.func,
};
