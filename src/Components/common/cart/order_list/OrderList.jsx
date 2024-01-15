import PropTypes from "prop-types";
const OrderList = ({ children, withStyle }) => {
  return <div className={`${withStyle}`}>{children}</div>;
};

export default OrderList;
OrderList.propTypes = {
  withStyle: PropTypes.string,
  children: PropTypes.any,
};
