import PropTypes from "prop-types";
const BurgerIcon = ({ burgerSetter, isOpened }) => {
  return (
    <div
      className={`block xl:hidden burger ${isOpened ? "burger-opened" : ""}`}
      onClick={() => burgerSetter(!isOpened)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerIcon;
BurgerIcon.propTypes = {
  burgerSetter: PropTypes.func,
  isOpened: PropTypes.bool,
};
